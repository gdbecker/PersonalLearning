## 04_ Mastering Your DAGs

### DAG Scheduling: Basics
- start_date: when to start scheduling your DAG
- schedule: how often you want to run your DAG
- max_active_runs: how many DAGs are allows to run at the same time
- Every DAG run has:
  - data_interval_start
  - state (how long it runs)
  - data_interval_end
  - (You can find all of this in the Airflow UI)
- Backfill
  - Have to do it manually with the CLI
  - Run DAGs prior to the start date when there's a time gap of missing DAG runs
  - Data integrity and idempotency
    - Ensure that your tasks are idempotent, meaning that they can be safely rerun multiple times without causing unintended consequences or duplicating data
    - If your tasks perform write operations or modify external systems, double check that backfilling won't result in duplicate or inconsistent data
    - If your data pipelines are idempotent, you can't backfill them
  - Write operations
    - Use MERGE or INSERT OVERWRITE/UPSERT
    - Don't append INSERT data
- Catchup
  - Best practice is to disable it with a False value

### Timezones
- A timezone is a region of the globe that observes a uniform standard time
- UTC = coordinated universal time 
- Timezones in Python
  - Timezone naive
    - Python datetime objects without the tzinfo parameter
  - Timezone aware
    - Python datetime objects with the tzinfo parameter
  - Maive datetime objects are highly prone to errors because of bad interpretation
- Timezones in Airflow
  - Airflow supports timezones
  - Datetime information stored as UTC
  - The UI shows dates in UTC by default (you can change this)
  - Up to you how to deal with timezones
  - default_timezones = utc in the Airflow configuration file
  - Airflow uses the pendulum Python library to deal with timezones
- CRON schedules
  - Airflow assumes you will always run your DAG at a specific time
  - It respects daylight saving time (DST)

### DAG Scheduling Based on Datasets
- Use a trigger to connect one DAG to another, based on the dataset
  - Example: a data engineering team creates a dataset, and then the data analytics team needs to use that generated dataset (based on date created)
- Conditional dataset triggering
  - `&` -> AND
  - `|` -> OR

### Testing DAGs and Tasks
- Astro CLI testing features
  - Parses DAGs, ensures there are no import errors
    - `astro dev parse`
  - Runs all tests in the tests/ folder
    - `astro dev pytest --verbosity debug`
  - Tests the environment against Airflow/Runtime versions
    - `astro dev upgrade-test`
- Airflow CLI testing features
  - Executes a single DAG run
    - `airflow dags test`
  - Executes a single task
    - `airflow tasks test`