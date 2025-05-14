from airflow.decorators import dag, task
from airflow.operators.empty import EmptyOperator
from pendulum import datetime, duration
from include.datasets import DATASET_COCKTAIL

@dag(
  start_date=datetime(2025, 5, 14),
  schedule=[DATASET_COCKTAIL],
  catchup=False,
  description='This DAG processes e-commerce data',
  tags=['e-commerce', 'team_a', 'another_tag'],
  default_args={'retries': 2},
  dagrun_timeout=duration(minutes=20),
  max_consecutive_failed_dag_runs=2
)
def ecom():
  ta = EmptyOperator(task_id='ta')
  
ecom()