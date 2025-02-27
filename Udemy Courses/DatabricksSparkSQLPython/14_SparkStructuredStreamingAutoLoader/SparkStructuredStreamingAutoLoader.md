## 14_ Spark Structured Streaming and Auto Loader

### Spark Structured Streaming
- Data Stream = a continuous flow of data that grows over time
- Fault Tolerance in Spark Structured Streaming refers to the system's ability to recover from failures and continue processing data without data loss or corruption
- Exactly-once processing guarantee = a type of data processing guarantee that ensures that each data record is processed only once and that no duplicates are created
- Pros
  - Real-time streaming
  - Scalable
  - Fault tolerant

### Reading and Writing to a Data Stream
- [Structured Streaming API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/index.html)
- [DataStreamReader API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/api/pyspark.sql.streaming.DataStreamReader.html)
- [DataStreamWriter API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/api/pyspark.sql.streaming.DataStreamWriter.html)
- [Input/Output](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/io.html)
- [Query Management](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/query_management.html)

### Auto Loader
- [What is Auto Loader?](https://learn.microsoft.com/en-us/azure/databricks/ingestion/cloud-object-storage/auto-loader/)
- Auto Loader =  a more efficient and scalable solution for ingesting and processing continuous streams of data compared to traditional file formats
- Pros
  - Automated Data Discovery: continually checks that the latest data is always available for processing
  - Data Source Support: supports a wide range of data sources, making it easy to integrate with existing data pipelines and different data formats
  - Cleansing and Transformation: includes data cleansing and transformation capabilities
  - Automated Batching: reducing the overhead of processing small amounts of data and improving overall performance
  - Custom Settings: configure various parameters, such as batch sizes, checkpoint intervals, and trigger mechanisms
  - File Format Support: can ingest JSON, CSV, PARQUET, AVRO, ORC, TEXT, and BINARYFILE file formats
- Auto Loader provides a Structured Streaming source called `cloudFiles`. Given an input directory path on the cloud file storage, the `cloudFiles` source automatically processes new files as they arrive, with the option of also processing existing files in that directory