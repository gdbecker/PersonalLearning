## 01_ Course Intro

### Why should you learn Databricks?
- Data engineering
- Data analysis
- Data science
- Machine Learning
- Use R, Scala, Python

### Big Data
- Big Data = massive amount of data available to organizations that - because of its volume and complexity - is not easily managed or analyzed by many BI tools
- A zettatybte = 1 trillion gb
- Vertical Scaling = adding more power to an existing machine (like CPU or RAM)
- HDFS = Hadoop Distributed File System
- MapReduce splits the workload across nodes
- Apache Spark is an enhancement to MapReduduce
  - In-memory caching
  - Up to 100x faster than MapReduce

### Hadoop
- Cons
  - Relatively slow processing
  - No real-time processing
  - Difficult to use and administer

### Apache Spark
- Enter Apache Spark as an alternative
- Key characteristics
  - Speed
  - Ease of Use
  - Spark Core (Java, Python, SQL, Scala, R)
  - Modularity
  - Extensibility
- The SparkContext is the Driver Node
  - Has a Cluster Manager
- The Driver Node and Cluster Manager control Worker Nodes
  - Each Worker Node has an Executor and slots for Tasks
  - Can scale horizontally by adding more Worker Nodes
- Cons
  - Requires creating and managing the environment as well as provisioning virtual machines in the cluster
  - Difficult to collaborate with others

### Databricks
- Enter Databricks
- Pros
  - Fully managed cloud-based platform
  - Easy to collaborate
  - Integrates with other platforms

### Apache Spark Architecture
- Resilient Distributed Dataset (RDD) = a collection of elements partitioned across the nodes of the cluster that can be operated on in parallel
  - These are immutable (read-only) collections of objects of varying type
  - The Spark Core API is an RDD
- Dataframe = distributed collection of data organized into named columns
  - It's conceptually equal to a table in a relational database

### Apache Spark and Databricks Comparison
- [Detailed article](https://www.databricks.com/spark/comparing-databricks-to-apache-spark)