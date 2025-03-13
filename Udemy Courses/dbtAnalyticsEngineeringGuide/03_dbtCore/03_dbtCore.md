## 03_ dbt Core

### General steps
- Make sure you're on the latest version of Python installed locally, not on Anaconda
- Create a venv in the overall project folder on the same level as the dbt project folder
  - `py -m venv .venv`
  - "venv" refers to the name of the virtual environment you are initializing
  - ".venv" refers to the folder that the venv will be placed in
- Activate venv
- Install dbt and any specific data warehouse packages for the project
- Set up the connection between the dbt project and data warehouse you're using (like for BigQuery, make sure your Google credentials are automatically selected to use their APIs and access your warehouse)

### Commands
- Activate Python virtual env on Windows: ".venv\Scripts\activate" (when you are in the same directory as the venv folder)
- Activate virtual env when you are accessing the venv from below: "..\.venv\Scripts\activate"
- Deactivate Python virtual env on Windows: "deactivate"
- Make a requirements.txt file of Python packages (while venv is activated): "pip freeze > requirements.txt"
- Run all dbt models: "dbt run"
- Run all dbt models and replace what was run before with new configurations in dbt_project.yml: "dbt run --full-refresh"
- Run specific dbt model path: "dbt run -m warehouse.dim_customer"
- To run tests: "dbt test"

### VS Code extensions
- vscode-dbt
- dbt formatter
- dbt shortcuts
- dbt-bigquery-preview
- Power User for dbt
- SQLTools

### dbt Power User
- https://docs.myaltimate.com/
- 
### dbt Core: `dbt init` Command - Create Profiles and Project Automatically
- The `dbt init` command initializes a new dbt Core project.
- It asks first-time users for the project name, database adapter, and connection details.
- It then creates a project folder with sample files and a connection profile at `~/.dbt/profiles.yml`.
- [See more here](https://docs.getdbt.com/reference/commands/init)

### Other free SQL databases to use for future projects
- https://www.blueboxes.co.uk/6-sample-sql-databases-for-your-next-azure-project
- https://github.com/microsoft/sql-server-samples/blob/master/samples/databases/northwind-pubs/instpubs.sql
- https://github.com/microsoft/sql-server-samples/blob/master/samples/databases/adventure-works/oltp-install-script/instawdb.sql