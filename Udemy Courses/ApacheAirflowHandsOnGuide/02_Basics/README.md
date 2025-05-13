## 02_ The Basics of Apache Airflow

### Why a data orchestrator?
- Data Orchestration
  - Process of coordinating and automating the movement, transformation, and integration of data across various systems na processes to ensure efficient and reliable data workflows
- Extract -> Clean -> Transform -> Clean
- How do you manage dependencies between these tasks?

### Why Airflow?
- Reliably orchestrate your data workflows at scale
  - Airflow is used at many companies like Slack, Airbnb, and Walmart
  - Can manage multiple schedulers
- Integrations and customizations
  - It's modular and can be used with many other dependencies
  - Uses Python and it's widely utilized
- Accessibility and dynamism
- Monitoring and data lineage
- Huge community and support
  - Has over 2500 contributors

### Core Components
- Web Server
  - Serves the user interface
- Scheduler
  - Schedules tasks while checking dependencies are met
- Meta database
  - Container Airflow meta data (task instances, workflows, etc)
- Executor
  - Defines how and on which systems to execute tasks
- Triggerer
  - Used for a special type of task (deferrable operators)
- Worker
  - Executes the tasks

### Core Concepts
- Tasks use an Operator
- Tasks use Dependencies to connect with each other
- DAG = Directed Acyclic Graph

### How does Airflow work?
- Add DAG to the director
- The Scheduler serialized the DAG into the meta database
- Scheduler checks if the DAG is ready to run and creates a DAG run
- Then it creates a Task Instance (TI)
- Scheduler sets the TI to the Executor
- Executor puts the TI into a queue
- Executor sends updates
- Worker assigned to the TI
- Worker sends updates to the TI
- Scheduler checks if there are any other tasks to run
- All the while, the Web Server pulls data from the meta database, which is collecting data this entire time

### Limitations
- Streaming
  - Not possible with Airflow
  - Airflow focuses on batch processing
- Data processing
  - Remember that Airflow is an orchestrator
  - Use Airflow as a way to coordinate when data processing happens but it's not the tool to actually do the processing

### CLI Commands
- To open the bash terminal within your container
  - `astro dev bash`
- Database commands
  - Check if the metadata database can be reached
    - `airflow db check`
  - Purge old records in database tables in archive tables
    - `airflow db clean`
  - Export archived data from the archive tables (default csv)
    - `airflow db export-archived`
  - Initialize the database
    - `airflow db init`
- DAGs commands
  - Run subsections of a DAG for a specified data range
    - `airflow dags backfill my_dag --reset-dagrun --rerun-failed-version --run-backwards -s 2024-01-01 -e 2024-01-10`
  - Re-sync DAGs
    - `airflow dags reserialize`
  - List all the DAGs
    - `airflow dags list`
- Task commands
  - Test a task instance
    - `airflow tasks test my_dag my_task 2025-01-01`