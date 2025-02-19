## 05_ Delta Lake

### Medallion Architecture and Last Mile ETL
- [Medallion architecture](https://learn.microsoft.com/en-us/azure/databricks/lakehouse/medallion)
- Medallion Architecture is a data design pattern that logically organizes data in your data lakehouse
- Typically there are 3 layers
  - Bronze
    - Ingestion layer
    - Maintains the raw state of the data source
    - Usually data engineers are here
  - Silver
    - Filtered, cleaned, augmented layer
    - Data is conformed and cleansed "just enough"
    - Mostly data engineers and data scientists/ML users here
  - Gold
    - Business level aggregates
    - Curated business-level tables
    - Data analysts and business analysts use this layer the most
- Goal of this architectural pattern is to incrementally and progressively improve the structure and quality of data as it flows through each layer of the architecture
- Last Mile ETL
  - ETL = extract, transform, load
  - Extracting value from data
  - Small changes to gold layer data

### Benefits of Delta File Format
- [Delta Lake](https://delta.io/)
- ACID Transactions
  - ACID = atomicity, consistency, isolation, durability
  - Operations are processed in a manner that maintains consistency even in the face of concurrent, parallel, or failed operations
- Schema Evolution
  - Can modify data's structure without breaking existing data
- DML (Data Manipulation Language)
  - Delta Lake supports standard DML operations, such as MERGE INTO
  - Allowing you to modify data directly within the data lake
- Audit History
  - Delta Lake automatically tracks changes to data, providing a comprehensive audit history
- Time Travel
  - Delta Lake enables time travel capabilities, allowing you to access and analyze data at different points in time
- Optimized Performance
  - Delta Lake uses optimizations like file compaction and indexing
  - Improved query performance / storage costs vs traditional formats
- Unified Batch and Streaming
  - Delta Lake unifies batch and streaming data processing
  - This simplifies the architecture and reduces complexity
- Open Source
  - Delta Lake is an open-source project
  - Continuously developed by a large community of contributors

### Upsert / Merge Into
- [Clause: MERGE INTO](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/delta-merge-into)

### Table Audit History and Time Travel
- [Delta history and time travel](https://learn.microsoft.com/en-us/azure/databricks/delta/history)