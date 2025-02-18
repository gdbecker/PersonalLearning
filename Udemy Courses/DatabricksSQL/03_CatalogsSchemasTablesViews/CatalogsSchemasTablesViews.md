## 03_ Catalogs, Schemas, Tables, and Views

### Data Types in Databricks SQL
- [Databricks data types](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-datatypes)
- A data type is an attribute that specifies the type of data that the object can hold
- Types of data include numerical data, character data, date and time data and so on
- Data types are assigned to each column in a table
- Main types:
  - Numerical: integer data types hold whole numbers, and there are four types:
    - INT
    - TINYINT
    - SMALLINT
    - BIGINT
    - Decimal types (for precision needs):
      - FLOAT
      - DOUBLE
      - DECIMAL
  - String
    - Represents character string values
    - They can appear the same as other data types, like a string could be '123'
  - Date/Time
    - DATE is used to store date values. Represented in the format "YYY-MM-DD"
    - TIMESTAMP is used to store date and time values
    - TIMESTAMP_NTZ does not take the time zone into account
    - INTERVAL represents the duration of time, like years, months, days, etc
  - Boolean
    - Represents a logical value: TRUE/FALSE

### Tables: Two Types
- Managed Tables
  - Manages metadata and underlying data file
    - Metadata = info about data such as the table structure or data
    - Underlying Data = raw files containing actual information
  - When you "drop" a Managed Table, the metadata and underlying data is deleted
  - Managed Tables are the default when creating tables
  - Types: Delta Lake
- External Tables
  - Managed metadata only
  - When you "drop" an External Table, the underlying data is unaffected, only the metadata is deleted
  - Must specify LOCATION when creating an External Table
  - Types: Delta Lake, Parquet, orc, csv, json, avro, txt

### Creating Managed Tables
- The `_delta_log` is an ordered record of every transaction that has ever been performed on a Delta Lake table since its inception
- Delta Lake uses the parquet format to store data. It offers benefits on top of parquet such as ACID compliance

### Creating an External Storage Location
- [Managed External Locations and Storage Credentials](https://learn.microsoft.com/en-us/azure/databricks/connect/unity-catalog/#manage-external-locations)
- If you specify a storage location when creating a catalog, then that takes precedence over the default storage location for the metastore
- If you specify a storage location when creating a schema, then that takes precedence over the catalogs and schemas storage location

### Truncate Tables
- [Command: TRUNCATE TABLE](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-truncate-table)

### Alter Tables
- [Command: ALTER TABLE](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-alter-table)

### Drop Tables, Schemas, and Catalogs
- [Command: DROP TABLE](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-drop-table)
- [Command: DROP SCHEMA](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-drop-schema)
- [Command: DROP CATALOG](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-drop-catalog)