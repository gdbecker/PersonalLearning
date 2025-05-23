"""
To add a daily schedule that materializes your dbt assets, uncomment the following lines.
"""
from dagster import ScheduleDefinition
from dagster_dbt import build_schedule_from_dbt_selection

from .assets import dbtcompletebootcamp_dbt_assets
from .jobs import coingecko_job

dbt_schedule = build_schedule_from_dbt_selection(
  [dbtcompletebootcamp_dbt_assets],
  job_name="materialize_dbt_models",
  cron_schedule="0 0 * * *",
  dbt_select="fqn:*",
)

coingecko_schedule = ScheduleDefinition(
  job=coingecko_job,
  cron_schedule="0 6 * * *",  # Run daily at 6 AM UTC
  name="coingecko_daily_schedule"
)

schedules = [dbt_schedule, coingecko_schedule]