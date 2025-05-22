## 04_ Course Project Setup

### Setting up a virtual environment (Mac)
- Make sure you're on the latest version of Python installed locally, not on Anaconda
- Create a venv in the overall project folder on the same level as the dbt project folder
  - `python3 -m venv .venv`
  - "venv" refers to the name of the virtual environment you are initializing
  - ".venv" refers to the folder that the venv will be placed in
- Activate venv
- Install dbt and any specific data warehouse packages for the project
- Set up the connection between the dbt project and data warehouse you're using (like for BigQuery, make sure your Google credentials are automatically selected to use their APIs and access your warehouse)

### Commands for venv and dbt
- Select Python interpreter in VS Code on Mac: command + shift + P
- Activate Python virtual env on Mac: "source venv/bin/activate" (when you are in the same directory as the venv folder)
- Deactivate Python virtual env on Mac: "deactivate"
- Make a requirements.txt file of Python packages (while venv is activated): "pip freeze > requirements.txt"
- Run all dbt models: "dbt run"
- Run all dbt models and replace what was run before with new configurations in dbt_project.yml: "dbt run --full-refresh"
- Run specific dbt model path: "dbt run -m warehouse.dim_customer"
- To run tests: "dbt test"

### Selecting the right interpreter in VS Code
- Activate the virtual environment
- Run: `which python`
- Copy that interpreter path
- Use: command + shift + p, and select Python: Select Interpreter
- Paste in this interpreter path you copied
- Reload the window. command + shift + p > Developer: Reload Window

### dbt debug
- Run this command to make sure everything checks out
- You can also see which python path it's using