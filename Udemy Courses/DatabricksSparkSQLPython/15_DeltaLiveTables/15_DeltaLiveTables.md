## 15_ Delta Live Tables

### Delta Live Tables
- A framework for building reliable, maintainable, and testable data processing pipelines built on top of Delta Lake
- Benefits
  - Simplified development
    - Manage dependencies between the entities and tables
    - Task orchestration and cluster management
    - Pipeline monitoring
    - Data quality and error handling
  - Data quality checks
    - Define data quality constraints via Delta Live Tables Expectations
  - Cost effective and efficient
    - Enhanced autoscaling can handle unpredictable workloads, resulting in efficiency and cost benefits
  - Monitoring and pipeline visibility
    - Task operational stats, data lineage, and monitor pipeline health
- A Delta Live Table pipeline is a directed acyclic graph (DAG) linking data sources to target datasets
- Tables are similar to traditional materialized views. The Delta Live Tables runtime automatically creates tables in the Delta format and ensures those tables are updated with the latest result of the query that creates the table

### Data Quality Checks
- [Manage data quality with pipeline expectations](https://learn.microsoft.com/en-us/azure/databricks/delta-live-tables/expectations)

### Streaming Live Delta Tables
- [Transform data with pipelines](https://learn.microsoft.com/en-us/azure/databricks/delta-live-tables/transform)

### Additional Properties and Views
- [Delta Live Tables Python language reference](https://learn.microsoft.com/en-us/azure/databricks/delta-live-tables/python-ref)
- [What is Delta Live Tables?](https://learn.microsoft.com/en-us/azure/databricks/delta-live-tables/)