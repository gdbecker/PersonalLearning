from airflow.decorators import dag
from airflow.operators.python import PythonOperator
from pendulum import datetime, duration
from include.datasets import DATASET_COCKTAIL
from include.tasks import _get_cocktail, _check_size

def _handle_failed_dag_run(context):
  print(context)

@dag(
  start_date=datetime(2025, 1, 1),
  schedule='@daily',
  catchup=False,
  description='DAG for grabbing data from the API',
  tags=['ecom'],
  on_failure_callback=_handle_failed_dag_run,
  default_args={
    'retries': 2,
    'retry_delay': duration(seconds=2),
    'retry_exponential_backoff': True
  }
)
def extractor():
  
  get_cocktail = PythonOperator(
    task_id='get_cocktail',
    python_callable=_get_cocktail,
    outlets=[DATASET_COCKTAIL]
  )
  
  check_size = PythonOperator(
    task_id='check_size',
    python_callable=_check_size
  )
  
  get_cocktail >> check_size

my_extractor = extractor()

if __name__ == '__main__':
  my_extractor.test()