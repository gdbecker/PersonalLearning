## 08_ Monitoring Apache Airflow

### Monitoring Airflow Basics
- Based on the logging module
- Written into files
- Log levels (INFO, ERROR, DEBUG, WARNING, CRITICAL)
- Formatters
- Handlers for outputs
  - FileHandler
  - StreamHandler
  - NullHandler
- How the logger is set up 
  - getLogger()
  - FileHandler
  - Formatter(settings.SIMPLE_LOG_FORMAT)
  - setFormatter
  - addHandler
  - setLevel(settings.LOGGING_LEVEL)
- Where are the logs stored? It depends
  - File, stream, S3, E3, GCS, ...

### AWS ElasticSearch
- The most popular and preferred open-source analytics and search engine is Elasticsearch
- Clickstream analytics, real-time application monitoring, and log analytics are among the use cases where it is favoured
- Elasticsearch is an open source and RESTful analytics and search engine based on Apache Lucene
- You can deliver data over AWS Elasticsearch in the form of JSON documents. You can utilise ingestion or API tools to do this. Amazon Kinesis Firehose and Logstash are two popular preferred tools. Elasticsearch also encourages the automated storing of the original document. Then, within the cluster index, you may add searchable references to the original content.
- After that, you can use the specific Elasticsearch API to search for the document and get it. Additionally, you can visualise your data and create useful dashboards using any open-source visualisation tool with AWS Elasticsearch. Within Elasticsearch, for example, Kibana is a built-in visualisation tool!

### Configuring Airflow with ElasticSearch
- Important points
  - Airflow assumes that each log message has the field "offset"
    - Number to read logs in the right order
    - Defined through Filebeat
  - Airflow assumes that each log message has the field "log_id"
    - {dag_id}-{task_id}-{execution_date}-{try_number}
    - Must be defined through Logstash

### Metrics
- StatsD
  - Airflow sends metrics to StatsD
  - Daemon to aggregate and summarize application metrics
  - Extremely fast (UDP) and tiny resource footprint
  - Forward metrics to other apps
- Metrics depend on three types
  - Counters
  - Gauges
  - Timers
- TIG Stack
  - Telegraf
    - Open source agent for collecting, processing, aggregating metrics
  - InfluxDB
    - Time series database
  - Grafana
    - Data visualization and monitoring app
- Important points
  - StatsD package must be installed
  - Metrics can be filtered with `statsd_allow_list`