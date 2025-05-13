from airflow.decorators import dag, task
from datetime import datetime, timedelta
import random

@dag(
  start_date=datetime(2024, 1, 1),
  schedule="@daily",
  description='A simple DAG to generate and check random numbers',
  catchup=False,
  tags=['Assignment01_Taskflow']
)
def Assignment01_Taskflow():
  
  @task
  def generate_random_number():
    number = random.randint(1, 100)
    print(f"Generated random number: {number}")
    return number

  @task
  def check_even_odd(num):
    result = "even" if num % 2 == 0 else "odd"
    print(f"The number {number} is {result}.")
    
  check_even_odd(generate_random_number())

Assignment01_Taskflow()
