## 06_ Query Alerts and Monitoring

### Query History and Profile
- [Query history](https://learn.microsoft.com/en-us/azure/databricks/sql/user/queries/query-history)
- [Query profile](https://learn.microsoft.com/en-us/azure/databricks/sql/user/queries/query-profile)

### Query Caching in Databricks SQL
- [Query caching](https://learn.microsoft.com/en-us/azure/databricks/sql/user/queries/query-caching)
- Caching refers to the process of persisting intermediate data or the results of computations in memory or on disk
- It's an optimization technique used to speed up the execution of queries and transformations on large datasets
- Databricks SQL UI Cache
  - When users first open a dashboard or SQL query, the Databricks SQL UI Cache displays the most recent query result, including the results from scheduled executions
  - The cache is located within your Azure Databricks file system in your account
  - The UI cache does not work if:
    - Underlying data has been changed
    - Cluster has terminated, scaled up or down
    - SQL UI cache has a 7 days lifecycle 
- Results Cache
  - Local cache
    - In-memory cache that stores results in the SQL Warehouse
    - Will not work if:
      - Underlying data has been changed
      - Cluster has terminated, scaled up or down
      - 24 hour lifecycle
  - Remote Cache
    - Available on Serverless SQL Warehouses only
    - It's a cache system that retains query results by persisting them in cloud storage
    - Will not work if:
      - Underlying data has changed
      - 24 hour lifecycle
- Disk Cache (aka Delta Cache)
  - Stores data on disk, allowing for accelerated data reads
  - Data is automatically cached when files are fetched, utilizing a fast intermediate format
  - The disk cache ensures the data is located closer to the worker nodes, resulting in improved query performance
  - Will not work if:
    - Underlying data has changed
    - Cluster has terminated, scaled up or down

### Query Alerts
- [Query alerts](https://learn.microsoft.com/en-us/azure/databricks/sql/user/alerts/)