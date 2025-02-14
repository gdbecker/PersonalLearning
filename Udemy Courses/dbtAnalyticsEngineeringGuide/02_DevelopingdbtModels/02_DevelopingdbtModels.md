## 02_ Developing dbt Models

### What is a dbt Model?
- A SQL model is a select statement
- A SQL model is a set of instructions that define how to transform and manipulate data stored in the data warehouse
- The Model is not a physical table or view stored in the data warehouse
- A model is a code-based representation of the desired state of the data, which can be executed to produce the actual output
- When a model is executed, it creates or updates views or tables in the data warehouse

### Staging Models
- Staging is a critical step in the data engineering pipeline, where raw data from multiple sources is
  - Consolidated
  - Cleansed
  - Transformed before being processed by other downstream systems
- In dbt, the staging area is the folder in your project that contains your staging Models
- Staging models take raw data, and clean and prepare them for further analysis

### Intermediate Models
- Link to [dbt Labs article](https://docs.getdbt.com/guides/best-practices/how-we-structure/3-intermediate)

### Installing packages
- `dbt deps`

### Generating Documentation
- `dbt docs generate`

### codegen package
- [Link to dbt Hub page for `codegen`](https://hub.getdbt.com/dbt-labs/codegen/latest/)