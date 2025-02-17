## 02_ Introduction to Queries

### Your First Query
- [ANSI SQL](https://blog.ansi.org/sql-standard-iso-iec-9075-2023-ansi-x3-135/#gref)
  - ANSI SQL = American National Standards Institute
  - It's the standard language for relational database management systems
- Hive Metastore is the legacy per workspace metastore and tables in the catalog hive_metastore are registered in the Hive Metastore. Any other catalogs listed are governed by Unity Catalog
- [Evolution of Databricks SQL Language](https://www.databricks.com/blog/2021/11/16/evolution-of-the-sql-language-at-databricks-ansi-standard-by-default-and-easier-migrations-from-data-warehouses.html)

### Switching Catalogs and Schemas
- [Syntax: USE SCHEMA](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-use-schema)
- [Syntax: USE CATALOG](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-use-catalog)

### Scheduling Queries
- [Schedule a query](https://learn.microsoft.com/en-us/azure/databricks/sql/user/queries/schedule-query)
- When the query runs it will start up the SQL Warehouse it's attached to if the Warehouse is terminated