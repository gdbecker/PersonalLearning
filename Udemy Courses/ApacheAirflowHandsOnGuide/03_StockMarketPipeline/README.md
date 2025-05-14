## 03_ The Stock Market Pipeline

### Learning Objectives
- Create data pipelines from A to Z
- Create various kinds of tasks
- Monitor and manage data pipelines
- Interact with other tools

### Usernames/passwords
- Airflow UI: admin/admin
- minio: minio/minio123
- Metabase BI: garrett@gmail.com/everythingisawesome123

### Docker build commands (in order)
- Navigate to the folder where the Dockerfiles are, and run the build commands for each Spark image
- Spark Master
  - `docker build -t airflow/spark-master .`
- Spark Worker
  - `docker build -t airflow/spark-worker .`
- Spark cluster - stock-app
  - `docker build -t airflow/stock-app .`

### URLs
- Airflow home: http://localhost:8080/home
- Minio: http://localhost:9001/browser
- Metabase: http://localhost:3000/dashboard/2-stock-dashboard

### Commands
- Ongoing testing as we added each DAG function
  - `astro dev run dags test stock_market 2025-05-14`