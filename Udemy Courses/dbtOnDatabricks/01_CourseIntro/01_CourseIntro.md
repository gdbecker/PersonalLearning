## 01_ Course Intro

[Link to course wiki](https://github.com/malvik01/DBT-On-Databricks-Course/wiki)

### dbt Cloud & dbt Core
- dbt Cloud (hosted)
  - A web-based platform with built-in IDE, job scheduling, and version control for easy project management
- dbt Core (local IDE, self-managed)
  - The open-source version that runs locally via command line, allowing development in tools like VS Code

### Pre-Requisites
- Databricks experience
  - Solid understanding of Databricks, including the Lakehouse architecture, the Unit Catalog Metastore
- SQL skills
  - Intermediate working knowledge of SQL
- Databricks account with Unity Catalog
  - Workspace Admin permissions
  - Can be on Azure, AWS, or GCP
- dbt Cloud
  - I will take you through the set up for this in the next section

### dbt
- dbt, short for Data Build Tool, is an open-source tool that allows data analysts and engineers to transform data inside their modern data platform
- It provides a framework for writing and organizing SQL queries, version-controlling them, and running them in a consistent, repeatable manner
- Not a data extraction tool
- Works with data already loaded into a data platform, transforming it into meaningful tables that analysts can use
- dbt integrates with Databricks, Snowflake, Microsoft Fabric, BigQuery, Amazon RedShift, AlloyDB, and Starbust data platforms

### ETL and ELT
- ETL = extract, transform, load
- ELT - extract, load, transform
  - More modern approach
- dbt is primarily used for the Transform part of these processes
- Modern platforms are well suited for the ELT approach
- With the advent of cloud data platforms (like Databricks), compute and storage are decoupled, allowing large amounts of data to be stored cheaply and efficiently in raw form

### Why dbt?
- SQL-first approach
- Modularity
- Version control
- Documentation (automatically generated)
- Testing, integrated into the pipeline
- Lineage graph
- Platform agnostic

### What is Jinja?
- Jinja is a templating engine that allows you to introduce dynamic content into static files like SQL
- With Jinja, you can embed variables, expressions, loops, and conditional logic directly in your SQL queries
- This makes it possible to create reusable and flexible code instead of repeating similar queries or hardcoding values
- Pros
  - Reference other models dynamically
  - Use conditional logic
  - Re-use code (DRY = don't repeat yourself)

### What is [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)?
- YAML = YAML Ain't Markup Language
- Lightweight, human-readable format
- Ideal for configuration files
- YAML is used to manage various aspects of a dbt project
  - Model configurations
  - Sources and tables
  - Testing and documentation
- Syntax
  - YAML is arranged in key-value pairs, you use a colon `:` to separate the key from the value
  - Indentation is used to define the structure (use spaces, not tabs)
  - Lists: represented by a hyphen
  - Comments: use the `#` for comments

### What is a [DAG](https://www.getdbt.com/blog/guide-to-dags)?
- DAG = Directed Acyclic Graph
- Visual tool that maps out how the different data sources are connected to the models you build
- Showing how the data moves and gets transformed
- Shows what type each entity is: source, snapshot, model
- Identify upstream and downstream entities easily