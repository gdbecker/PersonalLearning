## 05_ Performance Concepts: Query Performance

### Query Performance Analysis Tools
- History Tab
  - Displays history for the last 14 days
  - Users can view other users' queries but cannot view their query results
- Query History
- Query Profile

### SQL Tuning
- Database order of execution
  - Rows -> Groups -> Result
    - Rows: from, join, where
    - Groups: group by, having
    - Result: select, distinct, order by, limit
- Join explosion
  - Join on columns with unique names
  - Understand table relationships
- Limit and Order By
- Spilling to Disk
  - "Bytes spilled to local storage"
    - Volume of data spilled to virtual warehouse local disk
  - "Bytes spilled to remote storage"
    - Volume of data spilled to remote disk
  - Remedy by:
    - Process less data
    - Virtual warehouse size
- Order by position
- Group by

### Caching
- Services layer
  - Metadata cache
    - Snowflake has a highly available metadata store which maintains metadata object info and stats
    - Some queries can be completed purely using this metadata, not requiring a running virtual warehouse
  - Results cache
    - 24 hours retention can be extended up to 31 days
    - To reuse a result:
      - New query exactly matches previous query
      - The underlying table data has not changed
      - The same role is used as the previous query
      - If time context functions are used, such as CURRENT_TIME(), the result cache will not be used
      - Result reuse can be disabled using the session parameter USE_CACHED_RESULT
- Warehouse layer
  - Local disk cache in ech virtual warehouse
    - Virtual warehouses have local SSD storage which maintains raw table data used for processing queries
    - The larger the virtual warehouse, the greater the local cache
    - It's purged when the virtual warehouse is resized, suspended or dropped
    - Can be partially used, retrieving the rest of the data required for a query from remote storage 
- Storage layer
  - Remote disk

### Materialized Views
- Pre-computed and persisted dataset derived from a SELECT query
- MVs are updated via a background process ensuring data is current and consistent with the base table
- MVs improve query performance by making complex queries that are commonly executed readily available
- MVs are an enterprise edition and above serverless feature
- MVs use compute resources to perform automatic background maintenance
- MVs use storage to store query results, adding to the monthly storage usage for an account
- MVs can be created on top of External Tables to improve their query performance
- MVs are limited in the following ways:
  - Single table
  - Cannot include joins
  - No UDFs, having, order by, limit, window functions

### Clustering
-  Clustering metadata
   -  Snowflake maintains the following clustering metadata for micro-partitions in a table:
      - Total number of micro-partitions
      - Number of overlapping micro-partitions
      - Depth of overlapping micro-partitions
   - SYSTEM$CLUSTERING_INFORMATION
 - Clustering depth

### Automatic Clustering
- Snowflake supports specifying one or more table columns/expressions as a clustering key for a table
- Clustering aims to co-locate data of the clustering key in the same micro-partitions
- Clustering improves performance of queries that frequently filter or sort on the clustered keys
- Clustering should be reserved for large tables in the multi-terabyte range
- Choosing a clustering key
  - Snowflake recommended a max of 3 or 4 columns (or expressions) per key
  - Columns used in column queries which perform filtering and sorting operations
- Re-clustering and clustering cost
  - As DML operations are performed on a clustered table, the data in the table might become less clustered
  - Re-clustering is a background process which transparently reorganizes data in the micro-partitions by the clustering key
  - Initial clustering and subsequent re-clustering operations consume compute and storage credits
  - Clustering is recommended for large table which do not frequently change and are frequently queried 

### Search Optimization Service
- This is a table level property aimed at improving the performance of selective point lookup queries
- A background process creates and maintains a search access path to enable search optimizations
- The access path data structure requires space for each table on which search optimization is enabled. The larger the table, the larger the access path storage costs
- 10 Snowflake credits per Snowflake-managed compute hour
- 5 Snowflake credits per Cloud Services compute hour
