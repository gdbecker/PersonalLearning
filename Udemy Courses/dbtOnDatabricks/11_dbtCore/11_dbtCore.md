## 11_ dbt Core

### dbt Core vs dbt Cloud
- [Comparison between the two](https://www.getdbt.com/product/dbt-core-vs-dbt-cloud)

| dbt Cloud | dbt Core |
|--|--|
| Managed platform with a web-based IDE | Open-source, command line tool |
| Offers job scheduling and version control integration | Provides essential dbt functionality with flexibility |
| Includes team collaboration tools | Suitable for do-it-yourself setups |
| Easy for teams to start without managing infrastructure | Runs locally on your computer or server, allowing full control over the environment |

| Why dbt Cloud? | Why dbt Core? |
|--|--|
| Managed, user-friendly platform with scheduling and collaboration tools | Complete control over the environment |
| Best for teams or users just getting started with dbt | Ideal for custom configurations and deeper tool integration (like Git, CI/CD pipelines) |
| Provides a web-based IDE, making it convenient for beginners | Open-source and free, minimizing costs |
|  | Suitable for advanced users looking for flexibility and complex integrations |

### Github Account and Repo
- [Github](https://github.com/)

### Installing git
- [Git](https://git-scm.com/downloads/win)

### Installing python
- [Python compatibility matrix](https://docs.getdbt.com/docs/core/pip-install#python-compatibility-matrix)
- [Download python](https://www.python.org/downloads/)

### VS Code Overview
- [Getting started](https://code.visualstudio.com/docs/getstarted/getting-started)
- [Download](https://code.visualstudio.com/download)

### Command Line Navigation
- [Command line navigation](https://gfranzini.gitbooks.io/tracer/content/support/command-line-mac-vs.-windows.html)

| Command | Windows | Mac |
|--|--|--|
| Current directory | `cd` | `pwd` |
| List items in current directory | `dir` | `ls` |
| Change to another directory | `cd <dir_name>` | `cd <dir_name>` |
| Go back up a directory level | `cd ..` | `cd ..` |
| Clear terminal | `cls` | `clear` |

### Initializing dbt Core Project
- [Databricks profiles.yml set-up](https://docs.getdbt.com/docs/core/connect-data-platform/databricks-setup)

### Use Databricks in dbt Workflow
- [Use Databricks in dbt workflow](https://learn.microsoft.com/en-us/azure/databricks/jobs/how-to/use-dbt-in-workflows)

### Power User Extension Overview (for VS Code)
- [Power User](https://marketplace.visualstudio.com/items?itemName=innoverio.vscode-dbt-power-user)
- [Power User docs](https://docs.myaltimate.com/)
- [Altimate AI](https://www.altimate.ai/)

### General steps
- Make sure you're on the latest version of Python installed locally, not on Anaconda
- Create a venv in the overall project folder on the same level as the dbt project folder
  - `py -m venv venv`
  - "venv" refers to the name of the virtual environment you are initializing
  - The second "venv" refers to the folder that the virtual environment will be placed in
- Activate venv
- Install dbt and any specific data warehouse packages for the project
- Set up the connection between the dbt project and data warehouse you're using (like for BigQuery, make sure your Google credentials are automatically selected to use their APIs and access your warehouse)

### Commands
- Activate Python virtual env on Windows: "venv\Scripts\activate" (when you are in the same directory as the venv folder)
- Activate virtual env when you are accessing the venv from below: "..\venv\Scripts\activate"
- Deactivate Python virtual env on Windows: "deactivate"
- Make a requirements.txt file of Python packages (while venv is activated): "pip freeze > requirements.txt"
- Run all dbt models: "dbt run"
- Run all dbt models and replace what was run before with new configurations in dbt_project.yml: "dbt run --full-refresh"
- Run specific dbt model path: "dbt run -m warehouse.dim_customer"
- To run tests: "dbt test"
- Create documentation: "dbt docs generate"
- View the documentation: "dbt docs serve"

### VS Code extensions
- vscode-dbt
- dbt formatter
- dbt shortcuts
- dbt-bigquery-preview
- Power User for dbt
- SQLTools