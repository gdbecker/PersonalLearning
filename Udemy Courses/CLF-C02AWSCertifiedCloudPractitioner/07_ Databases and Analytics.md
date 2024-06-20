## 07_ Databases and Analytics

### Databases intro
- Storing data on disk (EFS, EBS, EC2 Instance Store, S3) can have its limits
- Sometimes you want to store data in a database
- You can structure the data
- You build indexes to efficiently query/search through the data
- You define relationships between your datasets
- Databases are optimized for a purpose and come with different features, shapes and contrains
  - It's up to you on the exam to say which database is best for a solution
- Relational Databases
  - Looks just like Excel spreadsheets, with links between them!
  - Can use SQL to perform queries/lookups
- NoSQL Databases
  - NoSQL = non-SQL = non relational databases
  - NoSQL databses are purpose built for specific data models and have flexible schemas for building modern apps
  - Benefits
    - Flexibility: easy to evolve data model
    - Scalability: designed to scale-out by using distributed clusters
    - High-performance: optimized for a specific data model
    - Highly functional: types optimized for the data model
  - Examples: Key-value, document, graph, in-memory, search databases
  - NoSQL data example: JSON
    - JSON = JavaScript Object Notation
    - Common form of data that fits into a NoSQL model
    - Data can be nested
    - Fields can change over time
    - Support for new types, arrays, etc
- Databases and Shared Responsibility on AWS
  - AWS offers to manage different databases
  - Benefits:
    - Quick provisioning, high availability, vertical and horizontal scaling
    - Automated backup and restore, operations, upgrades
    - OS patching is handled by AWS
    - Monitoring, alerting
  - Note: many database technologies could be run on EC2, but you must handle yourself the resiliency, backup, patching, high availability, fault tolerance, scaling, ...

### RDS and Aurora overview
- Amazon RDS
  - RDS = Relational Database Service
  - Managed DB service for DB, using SQL as a query language
  - It allows you to create databases in the cloud that are managed by AWS
    - PostgreSQL, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM DB2, Aurora (AWS proprietary database)
- RDS Advantage over deploying DB on EC2
  - RDS is a managed service:
    - Automated provisioning, OS patching
    - Continuous backups and restore to specific timestamp (Point in Time Restore)!
    - Monitoring dashboards
    - Read replicas for improved read performance
    - Multi AZ setup for disaster recovery
    - Maintenance windows for upgrades
    - Scaling capability (vertical and horizontal)
    - Storage backed by EBS
  - BUT you can't SSH into your instances
- Amazon Aurora
  - Proprietary technology from AWS (not open sourced)
  - PostgreSQL and MySQL are both supported as Aurora DB
  - Aurora is "AWS cloud optimized" and claims 5x performance improvement over MySQL on RDS, over 3x the performance of Postgres on RDS 
  - Aurora storage automatically grows in increments of 10GB, up to 128TB
  - Aurora costs more than RDS (20% more) - but it is more efficient
  - Not in the free tier
- Amazon Aurora Serverless
  - Automated database instantiation and auto-scaling based on actual usage
  - PostgreSQL and MySQL are both supported as Aurora Serverless DB
  - No capacity planning needed
  - Least Management overhead
  - Pay per second, can be more cost effective
  - Use cases: good for infrequent, intermittent or unpredictable workloads

### RDS deployments options
- Read replicas:
  - Scale the read workload of your DB
  - Can create up to 15 read replicas
  - Data is only written to the main DB
- Multi-AZ
  - Failover in case of AZ outage (high availability)
  - Data is only read/written to the main DB
  - Can only have 1 other AZ as a failover
- Multi-Region (read replicas)
  - Disaster recovery in case of region issue
  - Local performance for global reads
  - Replication cost

### ElastiCache
- The same way RDS is to get managed Relational Databases...
- ElastiCache is to get managed Redis or Memcached
- Caches are in-memory databases with high performance, low latency
- Helps reduce load off databases for read intensive workloads
- AWS takes care of OS maintenance / patching, optimizations, setup, configuration, monitoring, failure recovery and backups

### DynamoDB
- Fully managed highly available DB with replication across 3 AZ
- NoSQL database - not a relational database
- Scales to massive workloads, distributed "serverless" database
- Millions of requests per second, trillions of rows, 100s of TB of storage
- Fast and consistent in performance
- Single-digit millisecond latency - low latency retrieval
- Integrated with IAM for security, authorization and administration
- Low cost and auto scaling capabilities
- Standard and infrequent access (IA) table class
- Data type
  - DynamoDB is a key/value database
- DynamoDB Accelerator - DAX
  - Fully managed in-memory cache for DynamoDB
  - 10x performance improvement - single-digit millisecond latency to microseconds latency - when accessing your DynamoDB tables
  - Secure, highly scalable, and highly available
  - Difference with ElastiCache at the CCP level: DAX is only used for and is integrated with DynamoDB, while ElastiCache can be used for other databases
- DynamoDB Global Tables
  - Make a DynamoDB table accessible with low latency in multiple regions
  - Active-Active replication (read/write to any AWS Region)

### Redshift
- Based on PostgreSQL but it's not used for OLTP
- It's for OLAP - online analytical processing (analytics and data warehousing)
- Load data once an hour, not every second
- 10x better performance than other data warehouses, scale to PBs of data
- Columnar storage of data (instead of row based)
- Massively parallel query execution (MPP), highly available
- Pay as you go based on the instances provisioned
- Has a SQL interface for performing the queries
- BI tools such as AWS Quicksight or Tableau integrate with it
- Redshift Serverless
  - Automatically provisions and scales data warehouse underlying capacity
  - Run analytics workloads without managing data warehouse infrastructure
  - Pay only for what you use (save costs)
  - Use cases: reporting, dashboarding apps, real-time analytics...

### EMR
- EMR = "Elastic MapReduce"
- EMR helps creating Hadoop clusters (Big Data) to analyze and process vast amounts of data
- The clusters can be made of hundreds of EC2 instances
- Also supports Apache Spark, HBase, Presto, Flink...
- EMR takes care of all the provisioning and configuration
- Auto-scaling and integrated with Spot instances
- Use cases: data processing, ML, web indexing, big data...
- For the exam: connect Hadoop with EMR

### Athena
- Serverless query service to perform analytics against S3 objects
- Uses standard SQL language to query the files
- Supports CSV, JSON, ORC, Avro, and Parquet (built on Presto)
- Supports $5 per TB of data scanned
- Use compressed or columnar data for cost-savings (less scan)
- Use cases: BI/analytics/reporting, analyze and query VPC flow logs, ELB logs, CloudTrail trails, etc
- For the exam: connect analyzing data in S3 using serverless SQL with Athena 

### QuickSight
- Serverless ML-powered BI service to create interactive dashboards
- Fast, automatically scalable, embeddable, with per-session pricing
- Use cases: Business analytics, building visualizations, perform ad-hoc analysis, get business insights using data
- Integrated with RDS, Aurora, Athena, Redshift, S3, ...

### DocumentDB
- Aurora is an "AWS-implementation" or PostgreSQL/MySQL
- DocumentDB is the same for MongoDB (which is a NoSQL database)
- MongoDB is used to store, query, and index JSON files
- Similar to "deployment concepts" as Aurora
- Fully managed, highly available with replication across 3 AZ
- DocumentDB storage automatically grows in increments of 10GB
- Automatically scales to workloads with millions of requests per second

### Neptune
- Full managed graph database
- A popular graph dataset would be a social network
  - Users have friends
  - Posts have commends
  - Comments have likes from users
  - Users share and like posts
- Highly available across 3 AZ, with up to 15 read replicas
- Build and run apps working with highly connected datasets - optimized for these complex and hard queries
- Can store up to billions of relations and query the graph with milliseconds of latency
- Highly available with replications across multiple AZs
- Great for knowledge graphs (Wikipedia), fraud detection, recommendation engines, social networking
- For the exam: connect graph databases with Neptune

### Timestream
- Full managed, fast, scalable, serverless time series database
- For data evolving over time
- Automatically scales up/down to adjust capacity
- Store and analyze trillions of events per day
- 1000s times faster and 1/10th the cost of relational databases
- Built-in time series analytics functions (helps you identify patterns in your data in near real-time)

### QLDB
- QLDB = Quantum Ledger Database
- A ledger is a book recording financial transactions
- Fully managed, serverless, highly available, replication across 3 AZ
- Used to review history of all the changes made to your app data over time
- Immutable system: no entry can be removed or modified, cryptographically verifiable
- 2-3x better performance than common ledger blockchain frameworks, manipulate data using SQL
- Difference with Amazon Managed Blockchain: no decentralized component, in accordance with financial regulation rules

### Managed Blockchain
- Blockchain makes it possible to build apps where multiple parties can execute transactions without the need for a trusted, central authority
- This is a decentralized blockchain
- Amazon Managed Blockchain is a managed service to
  - Join public blockchain networks
  - Or create your own scalable private network
- Compatible with the frameworks Hyperledger Fabric, and Ethereum 

### Glue
- Managed extract, transform and load (ETL) service - what you need to know for the exam
- Useful to prepare and transform data for analytics
- Fully serverless service
- Glue Data Catalog: catalog of databases
  - Can be used by Athena, Redshift, EMR

### DMS
- DMS = Database Migration Service
- Quickly and securely migrate databases to AWS, resilient, self healing
- The source database remains available during migration
- Supports:
  - Homogeneous migrations: example - Oracle to Oracle
  - Heterogeneous migrations: example - Microsoft SQL Server to Aurora

### Summary
- Relational Databases: OLTP: RDS and Aurora (SQL)
- Differences between Multi-AZ, Read Replicas, Multi-Region
- In-Memory Database: ElastiCache
- Key/Value Database: DynamoDB (serverless), and DAX (cache for DynamoDB)
- Warehouse - OLAP: Redshift (SQL)
- Hadoop Cluster: EMR
- Athena: query data on Amazon S2 (serverless and SQL)
- QuickSight: dashboards on your data (serverless)
- DocumentDB: "Aurora for MongoDB" (JSON - NoSQL database)
- Amazon QLDB: financial transactions ledger (immutable journal, cryptographically verifiable)
- Amazon Managed Blockchain: managed Hyperledger Fabric and Ethereum blockchains
- Glue: managed ETL (extract transform load) and Data Catalog service
- Database Migration: DMS
- Neptune: graph database
- Timestream: time-series data