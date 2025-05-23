import os
from dotenv import load_dotenv
from dagster_snowflake import snowflake_resource

load_dotenv()

snowflake = snowflake_resource.configured({
  "user": os.getenv("SNOWFLAKE_USER"),
  "password": os.getenv("SNOWFLAKE_PASSWORD"),
  "account": os.getenv("SNOWFLAKE_ACCOUNT"),
  "database": os.getenv("SNOWFLAKE_DATABASE"),
  "schema": os.getenv("SNOWFLAKE_SCHEMA"),
  "warehouse": os.getenv("SNOWFLAKE_WAREHOUSE"),
})