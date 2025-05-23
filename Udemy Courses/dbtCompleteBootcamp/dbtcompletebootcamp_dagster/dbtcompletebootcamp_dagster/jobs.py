from dagster import job
from .ops.coingecko_op import fetch_and_overwrite_from_coingecko
from .resources import snowflake

@job(resource_defs={"snowflake": snowflake})
def coingecko_job():
  fetch_and_overwrite_from_coingecko()

