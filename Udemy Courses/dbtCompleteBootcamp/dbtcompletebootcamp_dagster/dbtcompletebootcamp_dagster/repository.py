# your_dagster_project/repository.py

from dagster import Definitions
from .jobs import coingecko_job
from .schedules import coingecko_schedule
from .resources import snowflake
from .assets import dbt_assets  # Your existing dbt assets

defs = Definitions(
  assets=[dbt_assets],
  jobs=[coingecko_job],
  schedules=[coingecko_schedule],
  resources={"snowflake": snowflake},
)
