## 03_ Reading and Writing Data

### File Types
- [Different file types](https://learn.microsoft.com/en-us/azure/databricks/connect/)

### Reading Data
- [Input/Output](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/io.html)
- [csv files](https://spark.apache.org/docs/latest/sql-data-sources-csv.html#data-source-option)
- [StructType](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.types.StructType.html#pyspark.sql.types.StructType)
  - StructType defines the structure of the structure of the DataFrame
- [StructField](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.types.StructField.html#pyspark.sql.types.StructField)
  - StructField defines the metadata of the columns within a DataFrame

### Writing Data
- [Input/Output](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/io.html)
- [csv files](https://spark.apache.org/docs/latest/sql-data-sources-csv.html#data-source-option)

### Parquet File Format
- [Parquet file format](https://learn.microsoft.com/en-us/azure/databricks/query/formats/parquet)
- Parquet files will have column names and data types in them, and we don't need to specify options like the header when reading parquet files

### Deleting Files and Folders
- [Databricks utils](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/databricks-utils)