# October 10, 2023
# Beginner project: API with Airflow Data Engineering!

# Import packages
import requests
import pandas as pd
import json
from datetime import datetime
import s3fs

# Initial variables
dates = []
values = []

# Getting data from U.S. Energy Information Administration
url = "https://api.eia.gov/v2/petroleum/pri/gnd/data/?frequency=monthly&data[0]=value&facets[product][]=EPM0&facets[duoarea][]=NUS&start=1990-08&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=Bdgf7N1rGlQoLjcn00cdRrll3eM11ohy2I3TTJvE"
response = requests.get(url=url)
response.raise_for_status()
data = response.json()["response"]["data"]

for d in data:
    month = str(int(d["period"][-2::]))
    year = str(int(d["period"][0:4]))
    date = month + "/1/" + year
    dates.append(date)
    values.append(float(d["value"]))


# Make gas prices dictionary, assign to a DataFrame, convert to csv
data_dict = {
    "Date": dates,
    "Gas_Price_Value": values
}

df_gas = pd.DataFrame(data_dict)
df_gas.to_csv("Gas_Prices_Data.csv")
