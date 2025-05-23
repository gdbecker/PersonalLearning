## 05_ dbt Course Project and Notes

### dbt Commands
- `dbt run`
  - Loads in all of your models to the warehouse 
- `dbt seed`
  - Adds your .csv seed files as tables in the warehouse
- `dbt source freshness`
  - Check any freshness settings you have in your sources.yml file in the models folder
- `dbt snapshot`
  - Adds/refreshes the snapshot tables in your warehouse
- `dbt test`
  - Runs just the generic and singular tests you defined for your models
- `dbt build`
  - Runs `dbt run`, `dbt test`, `dbt snapshot`, and `dbt seed` in DAG order
- `dbt deps`
  - Loads in any packages as specified in packages.yml
- `dbt docs generate`
  - Generates your project documention, compiles into an HTML package
- `dbt docs serve`
  - Displays your docs in website format
- `dbt compile`
  - Compiles your SQL analyses files and sends to the target folder
  - Can run these compiled queries in your data warehouse
- `dbt run-operation <macro_name>`
  - Runs a specific macro (the macro name, not the filename)
  - Example usage: for running a macro with logging commands

### Models Overview
- Models are the basic building blocks of your business logic
- Materialized as views, tables, etc
- They live in SQL files in the "models" folder
- Models can reference each other and use templates and macros

### Common Table Expressions (CTEs)
- Often called "WITH queries," are temporary named result sets used in SQL queries
- They act like subqueries or views within the same query, making complex queries more readable and easier to manage
- CTEs are created using the WITH keyword and can be referenced multiple times within the same query

### Materializations
- View
  - Use for
    - You want a lightweight representation
    - You don't reuse data often
  - Don't use for
    - You read from the same model several times
- Table
  - Use for
    - You read from this model repeatedly
  - Don't use for
    - Building single-use models
    - Your model is populated incrementally
- Incremental (table appends)
  - Use for
    - Fact tables
    - Appends to tables
  - Don't use for
    - You want to update historical records
- Ephemeral (CTEs)
  - Use for
    - You merely want an alias to your date
  - Don't use for
    - You read from the same model multiple times

### Sources and Seeds
- Seeds are local files that you upload to the data warehouse with dbt
- Sources are an abstraction layer on the top of your input tables
- Source freshness can be checked automatically

### Snapshots
- Snapshots live in the snapshots folder
- dbt uses SCD type 2 for snapshots
- Strategies
  - Timestamp: a unique key and an updated_at field is defined on the source model. These columns are used for determining changes.
  - Check: any changed in a set of columns (or all columns) will be picked up as an update

### Tests
- There are two types of tests: singular and generic
- Singular Tests are SQL queries stored in tests which are expected to return an empty dataset
- There are four built-in generic tests
  - unique
  - not_null
  - accepted_values
  - relationships
- You can define your own custom generic tests or import tests from dbt packages (will look at later)

### Macros, Custom Tests and Packages
- Macros are jinja templates created in the macros folder
- There are many built-in macros in dbt
- You can use macros in model definitions and tests
- A special macro, called 'test', can be used for implementing your own generic tests
- dbt packages can be installed easily to get access to a plethora of macros and tests

### Documentation
- Documentations can be defined two ways
  - In .yml files (like schema.yml)
  - In standalone markdown files
- dbt ships with a lightweight documentation web server
- For customizing the landing page, a special file, overview.md, is used
- You can add your own assets (like images) to a special project folder

### Analyses, Hooks, and Exposures
- Analyses SQL files are good for ad hoc analyses you can compile code for and then run in your data warehouse environment
- Hooks
  - Hooks are SQL queries that are executed at predefined times
  - Hooks can be configured on the project, subfolder, or model leve
  - Types
    - `on_run_start`: executed at the start of dbt (run, seed, snapshot)
    - `on_run_end`: executed at the end of dbt (run, seed, snapshot)
    - `pre-hook`: executed before a model/seed/snapshot is built
    - `post-hook`: executed after a model/seed/snapshot is built
- Exposures are good for publishing a link to an external dashboard built on top of models built from your dbt project