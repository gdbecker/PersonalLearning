## 09_ Hive Metastore, Databases, Tables and Views

### Perform SQL Queries on DataFrames
- [createTempView](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.createTempView.html?highlight=createtemp)
- [createOrReplaceTempView](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.createOrReplaceTempView.html#pyspark.sql.DataFrame.createOrReplaceTempView)
- [createGlobalTempView](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.createGlobalTempView.html#pyspark.sql.DataFrame.createGlobalTempView)
- [createOrReplaceGlobalTempView](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.createOrReplaceGlobalTempView.html#pyspark.sql.DataFrame.createOrReplaceGlobalTempView)
- [spark.sql](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.sql.html#pyspark.sql.SparkSession.sql)

### Hive Metastore and Creating Databases
- [Hive metastore](https://docs.databricks.com/aws/en/archive/external-metastores)
- [Creating databases](https://spark.apache.org/docs/3.5.3/sql-ref-syntax-ddl-create-database.html)

### Managed Tables
- [Managed tables](https://learn.microsoft.com/en-us/azure/databricks/tables/#--managed-tables)
- [SQL syntax](https://spark.apache.org/docs/3.5.3/sql-ref-syntax.html)
- [saveAsTable](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrameWriter.saveAsTable.html?highlight=saveastable#pyspark.sql.DataFrameWriter.saveAsTable)

### Unmanaged (External) Tables
- [What are tables and views?](https://learn.microsoft.com/en-us/azure/databricks/tables/#--external-tables)
- [SQL syntax](https://spark.apache.org/docs/3.5.3/sql-ref-syntax.html)
- [saveAsTable](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrameWriter.saveAsTable.html?highlight=saveastable#pyspark.sql.DataFrameWriter.saveAsTable)

### Permanent Views
- [Create view](https://spark.apache.org/docs/3.5.1/sql-ref-syntax-ddl-create-view.html)