## 05_ Utilizing the Medallion Architecture in Databricks

### Medallion Architecture
- [Medallion architecture glossary](https://www.databricks.com/glossary/medallion-architecture)
  - Bronze: ingestion layer
  - Silver: filtered, cleaned and transformed. Should enable self-service analytics. Not too many transformations but just enough. Rough rule of thumb is to keep these tables in 3NF
  - Gold: business-level consumption ready. Used for reporting
  - Third Normal Form (3NF) = database schema design approach for relational databases which uses normalizing principles to reduce the duplication of data
- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)
- []()