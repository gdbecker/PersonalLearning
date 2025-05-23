## 06_ More dbt Topics (Hero Section)

### Orchestration
- Available tools
  - Apache Airflow
    -  Open source
    -  Largest amount of people use this
    -  Uses Python
    -  A bit more complex dbt integration
  - Dagster
    - Going to use in this course
    - Free open source for VS Code
    - Uses similar data concepts to dbt (dbt calls them models, Dagster calls them assets)
    - Has a great UI
    - Tight dbt integration
    - Easy to debug
  - Prefect
    - Much modern ETL tool
    - Uses Python
    - Simple dbt integration
  - Azure Data Factory
    - Doesn't have a tight dbt integration
    - It's possible to run `dbt run`
  - dbt Cloud
    - Proprietary offering from dbt Labs
    - Much simpler to set up and get going

### Getting Dagster Ready
- Go to the same directory that contains your dbt project
- Activate your venv
- Run: `dagster-dbt project scaffold --project-name <dbt project name>_dagster --dbt-project-dir=<dbt project name> --ignore-package-conflict`
- Run development server: `DAGSTER_DBT_PARSE_PROJECT_ON_LOAD=1 dagster dev`