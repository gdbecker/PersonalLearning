import os
from dotenv import load_dotenv
import requests
import pandas as pd
from dagster import op
from sqlalchemy import create_engine

# Load environment variables
load_dotenv()
sf_config = {
  "user": os.getenv("SNOWFLAKE_USER"),
  "password": os.getenv("SNOWFLAKE_PASSWORD"),
  "account": os.getenv("SNOWFLAKE_ACCOUNT"),
  "database": os.getenv("SNOWFLAKE_DATABASE"),
  "schema": os.getenv("SNOWFLAKE_SCHEMA"),
  "warehouse": os.getenv("SNOWFLAKE_WAREHOUSE"),
}

# CoinGecko URL endpoints
url_1 = "https://api.coingecko.com/api/v3/coins/markets"
url_2 = "https://api.coingecko.com/api/v3/global"
url_3 = "https://api.coingecko.com/api/v3/exchange_rates"
url_4 = "https://api.coingecko.com/api/v3/coins/list"

# CoinGecko parameters (only for raw__crypto_prices)
params = {
  "vs_currency": "usd"
}

# CoinGecko Headers
headers = {
  "accept": "application/json",
  "x-cg-demo-api-key": os.getenv("COINGECKO_API_KEY")
}

# Engine for connecting to my Snowflake account
engine = create_engine(
  f'snowflake://{sf_config["user"]}:{sf_config["password"]}@{sf_config["account"]}/{sf_config["database"]}/{sf_config["schema"]}?warehouse={sf_config["warehouse"]}'
)

@op(required_resource_keys={"snowflake"})
def fetch_and_overwrite_from_coingecko(context):
  # Table 1: raw__crypto_prices
  response_1 = requests.get(url_1, params=params, headers=headers)
  response_1.raise_for_status()
  json_data_1 = response_1.json()
  df_1 = pd.json_normalize(json_data_1)
  df_1.to_sql("raw__crypto_prices", engine, index=False, if_exists="replace", method="multi")
  
  # Table 2: raw__market_global
  response_2 = requests.get(url_2, headers=headers)
  response_2.raise_for_status()
  json_data_2 = response_2.json()
  data = response_2.json()['data']
  
  ## Table 2 transformations
  # Convert each nested dict into a DataFrame
  market_cap_df = pd.DataFrame(data['total_market_cap'].items(), columns=['currency', 'market_cap'])
  volume_df = pd.DataFrame(data['total_volume'].items(), columns=['currency', 'volume'])
  percentage_df = pd.DataFrame(data['market_cap_percentage'].items(), columns=['currency', 'market_cap_percentage'])

  # Merge on 'currency' column
  df_2 = market_cap_df.merge(volume_df, on='currency', how='outer')
  df_2 = df_2.merge(percentage_df, on='currency', how='outer')

  # Add top-level metadata to every row if needed
  df_2['updated_at'] = data['updated_at']
  df_2['market_cap_change_24h_usd'] = data['market_cap_change_percentage_24h_usd']
  
  # Save Table 2 to Snowflake
  df_2.to_sql("raw__market_global", engine, index=False, if_exists="replace", method="multi")
  
  # Table 3: raw__exchange_rates
  response_3 = requests.get(url_3, headers=headers)
  response_3.raise_for_status()
  json_data_3 = response_3.json()
  rates = json_data_3['rates']
  df_3 = pd.DataFrame.from_dict(rates, orient='index').reset_index()
  df_3 = df_3.rename(columns={'index': 'currency_code'})
  df_3.to_sql("raw__exchange_rates", engine, index=False, if_exists="replace", method="multi")
  
  # Table 4: raw__coin_reference
  response_4 = requests.get(url_4, headers=headers)
  response_4.raise_for_status()
  json_data_4 = response_4.json()
  df_4 = pd.json_normalize(json_data_4)
  df_4.to_sql("raw__coin_reference", engine, index=False, if_exists="replace", method="multi")
  
  # End message
  context.log.info("Overwritten crypto_data table in Snowflake.")
