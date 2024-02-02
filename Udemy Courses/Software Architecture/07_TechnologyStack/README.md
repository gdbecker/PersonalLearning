## Section 07 - Technology Stack

### Table of Contents
- [Section 07 - Technology Stack](#section-07---technology-stack)
  - [Table of Contents](#table-of-contents)
  - [Web Application - Solutions](#web-application---solutions)
  - [Apache Web Server](#apache-web-server)
  - [Nginx Web Server](#nginx-web-server)
  - [Web Containers and Spring Framework](#web-containers-and-spring-framework)
  - [Node.js](#nodejs)
  - [Cloud Solutions for Web](#cloud-solutions-for-web)
  - [Cloud Storage](#cloud-storage)
  - [Cloud CDN](#cloud-cdn)
  - [Services - Solutions](#services---solutions)
  - [Memcached](#memcached)
  - [Memcached Architecture](#memcached-architecture)
  - [Redis Cache](#redis-cache)
  - [Cloud Caching Solutions](#cloud-caching-solutions)
  - [RabbitMQ](#rabbitmq)
  - [Kafka](#kafka)
  - [Redis Pub/Sub](#redis-pubsub)
  - [Datastore - Solutions](#datastore---solutions)
  - [RDBMS](#rdbms)
  - [NoSQL Objectives and Trade-Offs](#nosql-objectives-and-trade-offs)
  - [Amazon DynamoDB](#amazon-dynamodb)
  - [DynamoDB Architecture](#dynamodb-architecture)
  - [Google BigTable](#google-bigtable)
  - [BigTable Architecture](#bigtable-architecture)
  - [HBase](#hbase)
  - [Cassandra Features](#cassandra-features)
  - [MongoDB](#mongodb)
  - [MongoDB Architecture](#mongodb-architecture)
  - [Analytics - Solutions](#analytics---solutions)
  - [Logstash Architecture](#logstash-architecture)
  - [Logstash Data Streaming Architecture](#logstash-data-streaming-architecture)
  - [Fluentd](#fluentd)
  - [Elastic Search](#elastic-search)
  - [Elastic Search Architecture](#elastic-search-architecture)
  - [Hadoop HDFS](#hadoop-hdfs)
  - [Map-Reduce](#map-reduce)
  - [Apache Spark](#apache-spark)
  - [Stream Processing](#stream-processing)

---

### Web Application - Solutions
- Static Content
  - Apache Web Server
  - Nginx Web Server
  - Cloud Storage
- Dynamic Content
  - Web Server - Apache HTTPD, Node.js
  - Java Web Containers - Tomcat, Jetty, Spring-Boot
- Content Caching
  - Nginx
- Content Distribution
  - CDN

### Apache Web Server
- Store static content
  - HTML/CSS/JS files
  - Image files
  - Documents
- Generate dynamic content
  - Get data and generate pages dynamically
  - PHP, Python, Perl
  - No JSP/Servlets
- Act as a reverse proxy
  - Not great

### Nginx Web Server
- Store static content
  - HTML/CSS/JS files
  - Image files
  - Documents
- Generate dynamic content
  - Not the best
- Act as a reverse proxy
  - Excellent
- Cache content
  - Good

### Web Containers and Spring Framework
- Dynamic content using Java
  - OO language for complex logic
- Web containers
  - Tomcat
  - Jetty
- Application Servers
  - Wildfly/JBoss
  - Weblogic
  - Websphere
- Spring-Boot
  - Runs embedded web container
    - Tomcat, Jetty
- MVC Architecture
  - Servlets for logic
  - JSP for presentation
- Spring containers
  - Runs inside of a web container
  - Provides
    - IOC/DI
      - For business logic
    - Model view controller
      - For frontends
    - JDBC templates
      - For accessing DB
    - Connection pools
      - HTTP, DB

### Node.js
- HTTP server
  - Uses JavaScript engine to process requests
- Highly efficient at handling a large number of connections
  - For requests that are IO bound and not CPU bound
- Single thread to handle all connections
  - Saves memory
  - Avoids context switching

### Cloud Solutions for Web
- Managed Services
  - Hardended solutions
  - Automated deployment
  - Built-in scalability and reliability
  - Global deployment solutions

### Cloud Storage
- Unlimited disk space
- Version control
- Access control
- Low latency
  - No overhead or directory structure
- High throughput
  - Parallel clients
  - Large files can be broken into smaller chunks for parallel read
- High availability and reliability
  - Multiple copies
  - Multiple physical locations
- Static website creation

### Cloud CDN
- Low latency local access for cache hits
- Persistent connections for cache miss
- Lower load on the backend

### Services - Solutions
- Web containers
  - REST and Spring containers
- Object caching
  - Memcache
  - Redis
- Asynchronous messaging
  - Redis
  - RabbitMQ
  - Kafka
- Service Mesh
  - Netflix
  - Istio

### Memcached
- Stores key value pairs
- Values can be
  - Any blob
  - Any size
    - Preferred < 1MB
    - Max is configurable

### Memcached Architecture
- Cache-aside pattern
- Sub-millisecond latency
- Horizontally scalable
  - Data is partitioned
- High throughput
  - Parallel operations
- Cluster aware client library
  - Consistent hashing for resolving a node
- Node failure is treated as a cache miss
  - Use large number of nodes with less data
- Data is lost is a node crashes or restarts

### Redis Cache
- Much like Memcached
- It's a [Key -> Data structure] store
  - Strings, Lists, SortedSets, Maps, ...
- Data-Store mode for persistence
  - Stores data on a disk
  - Allows backups
  - Can be started pre-populated with a backup
- Data replication
  - Asynchronous and synchronous
  - Read load distribution
  - High availability
- Can also be used as a messaging queue
- Data-Store mode requires fixed number of nodes
  - Cache mode is suitable for node scaling

### Cloud Caching Solutions
- AWS Elastic Cache
  - Memcached
  - Redis
- Google Memorystore
  - Memcached
  - Redis
- Fully managed
- Sub-millisecond latency
- Scalable to 5 TB
- Highly available (99.9%)

### RabbitMQ
- Design goals
  - At-least-once delivery
  - Message sequencing - FIFO
  - Interface decoupling
  - Consumer decoupling
  - Message rate decoupling
- Consumer mode
  - Push
  - Pull
- Use cases
  - Service integration
  - Message buffer
  - General purpose message broker
  - Messages are pushed to consumers
  - Message deleted once acknowledged
  - Message ordering is guaranteed
  - Useful for asynchronous service integration
  - Both persistent and transient messages are supported
  - Uses built-in component called exchange for routing
  - Scales to 50k messages per second
  - Scales well vertically
  - Not horizontally scalable
    - Master-Slave replication for high availability
      - Clients can connect to any node
      - All publish, consume operations first go to master

### Kafka
- Performance
  - Million messages per second
  - Sequential writes and reads on log files
  - Relies on page cache for quick reads
- Horizontally scalable
  - Topics are partitioned
- Order of data guaranteed only within a partition
  - Producer can decide the partition
- Messages are not deleted, so can be replayed
- Consumers can only pull the data
  - No push by Kafka
  - Not designed for service integration
- Useful for streaming analytical workloads
  - Where high throughput is required
  - Click streams, page views, logging, ingestion, security

### Redis Pub/Sub
- For short lived messages with no persistence
  - Much like a synchronous call
  - fire and forget
    - No delivery guarantee
- Million operations per second
- Useful for making dashboards
  - Leaderboard
- Comparison
  - Kafka
    - No push
    - Writes to log
  - RabbitMQ Transient
    - Delivery acknowledgement
    - Deletion of delivered messages

### Datastore - Solutions
- RDBMS
  - Oracle
  - SQL Server
- Distributed databases
  - Key-value
    - Dynamo
  - Column family
    - Big table
    - Cassandra
    - HBase
  - Document oriented
    - MongoDB

### RDBMS
- General purpose database (< 1-5 TB data, 10k connections)
- ACID transactions
  - Update of multiple records or tables
- Data consistency
  - Data same for all readers at any given time
- Fixed schema
  - Data analysis
    - Columns can be selected
    - Rows can be filtered
    - Queries can join tables
  - Query pattern can change or evolve
    - Any column can be indexed
    - Indexes can be created whenever required
- Normalized data
  - Efficient storage and writes
- Overwrite for updates

### NoSQL Objectives and Trade-Offs
|Objective|Architectural Choice|Trade-Off|
|-|-|-|
|Scalability|Horizontal Partitioning, Commodity Hardware|ACID Transactions, Joins|
|Availability|Data Replication, Eventual Consistency|Data Consistency|
|Flexible Schema|Key-Value, Column Family, Document-Oriented|SQL, Secondary Indexes, Integrity Constraints|
|Performance|Aggregate Schema, In-Memory R/W|Normalization, Non-Key Queries|

### Amazon DynamoDB
- Key-Value pair datastore
- Used for high scalability and availability
- Table is a hash-map
  - Persistent
  - Distributed
- API
  - Put, Get, Update, Delete, Query
- Index key - has two parts
  - Partition key
    - Can have only one attribute
    - Key is hashed to determine the partition
  - Sort key
    - Determines sort order of an item within a partition
    - Can be used for range query <, >, like
- R/W ops for a key are atomic

### DynamoDB Architecture
- Suitable for storing small chunks of data
  - Key values less than 1MB
- Peer-to-Peer cluster
  - No master - write on any node
  - Each node responsible for a set of keys
  - Consistent hashing of virtual nodes for key allocation
- Highly scalable
  - Practically any number of nodes
  - Petabytes of data
  - Can handle 10 million Rw ops requests/second
- Highly available
  - Updates are not rejected even in case of network partitions or server failures
  - Vector clocks and business rules to resolve merge conflicts
- Consistency guarantee is adjustable
  - R+W > N for strong consistency

### Google BigTable
- Basis for Apache HBase
- Column-Family storage
- Table as Tree-Map
  - Sparse
  - Sorted
  - Persistent
  - Distributed
- Limited CF (< 100)
- CFs are compressed
- Unlimited columns
- R/W ops atomic for a key
- Timestamps for versioning

### BigTable Architecture
- Schema-less, structured (CF), sorted data
  - Index for every column
- GFS for reliable persistent storage
  - Replicated storage for large files
- In-memory tablet servers
  - High R/W throughput with low latency
  - Single copy of data for read and write
    - No write conflicts
- Horizontally scalable
  - Stores peta/exabytes of data
  - Client load is distributed
- Strongly consistent
- Client
  - Caches tablet metadata
  - Directly works with tablet servers
- Master
  - Checks if tablet servers are live
  - Assigns tablets to tablet servers

### HBase
- Open source implementation of BigTable
- Column family schema
- Keys are range partitioned
- Storage on Hadoop HDFS
- Strong consistency over high availability
- Highly scalable
- High throughput and low latency writes

### Cassandra Features
- Schema-less, Column-Family Structured Data
  - Sparse
  - Persistent
  - Distributed
- Horizontally scalable
  - Petabytes of data
- Highly available
  - Even during network partitions
- High throughput R/W operations
- Merge conflicts
  - Vector clocks
  - Timestamps
  - Business rules

### MongoDB
- Key -> Document
  - In binary JSON (bson) format
- Columns created dynamically
- Columns can be indexed
- Documents can be queried
  - on id and/or column values
- An operation on a single document is atomic
  - 2 PC for multiple documents

### MongoDB Architecture
- Indexing for fast search
  - It's a write overhead
- Sharding for scalability
  - Rane sharding
  - Hash sharding
- Replication
  - Master-Slace
    - No write conflicts
  - Asynchronous (default)
    - Eventual consistency
  - Synchronous (on demand)
- Works very well with Node.js
  - JavaScript -> Node.js -> MongoDB
    - JSON format

### Analytics - Solutions
- Data movement
  - Logstash
  - Fluentd
- Storage
  - Hadoop HDFS
    - Map-Reduce
  - Elastic Search
    - Search
- Stream processing
  - Kafka
    - Buffer
  - Storm, Flink
    - Processing

### Logstash Architecture
- I/O plugins
  - Collect and move log/stream events
- Queue
  - Reliable data movement
  - At least once delivery
  - Tracks acks, applies backpressure
- Filter plugins
  - Filter, transform, aggregate

### Logstash Data Streaming Architecture
- Streaming log data for real-time analytics
- Horizontally scalable and highly available - any number of logstash nodes
- Fault tolerance - needs reliable disk storage (RAID, cloud persistent disks)
- Use Kafka as buffer - for heavy load that logstash queue cannot handle

### Fluentd
- Older than Logstash
- Memory footprint
  - Logstash - heavyweight (GB)
  - Filebeat - lightweight (MB)
  - Fluentd - lightweight (MB)
  - Fluent Bit - super lightweight (KB)
- All features of Logstash
- Routing
  - Tags
- Docker logging
  - Picks log events from container console

### Elastic Search
- Full-text search
  - Filter, group, aggregate
- Stores JSON documents
- Document fetched using id
- Indexes JSON keys and values
- Structure
  - Index -> database
  - Type -> table
  - Document -> row
    - JSON keys are flattened
  - Supports data types
- Users can specify mapping between terms and documents

### Elastic Search Architecture
- Document oriented data model
- Horizontally scalable
  - Petabytes of data
  - Data is sharded with key as document id
  - Put/Get request goes to specific shard
  - Search queries go to all shards
- Highly available
  - Shards are replicated
- Index structure is based on merge sort
- Index not updated with every update or insert
- Index maintained in memory
  - Occasionally flushed to disk

### Hadoop HDFS
- Distributed file data storage
  - Unstructured data files
  - Petabytes of data
  - Large file size > 100MB
- Distributed files
  - Files broken into chunks
  - For parallel reads
    - Map-Reduce
- Sequential writes - append
  - Large blocks of data - 64MB
- Replication for reliability

### Map-Reduce
- Parallel file processing on Hadoop cluster
- Processing code executes on datanodes
- Input/Output sources
  - HDFS, HBase, Cassandra
- Map phase
  - Filtering and transformation
- Reduce phase
  - Shuffles map output across nodes
  - Groups related info
  - Computes aggregate data

### Apache Spark
- Evolution of Map-Reduce
- In memory
  - 10x to 100x times faster
- DAG of operations
  - Multiple operations in a DAG
  - Multiple in-built operations
- Interactive
  - Interactive shell in Scala/Python/R
- In-built libraries for
  - SQL interface, machine learning, graph processing, streaming

### Stream Processing
- Low latency
  - Keep data moving
- High throughput
  - Multiple sources
- Event issues
  - Event delay
  - Out of order
  - Missing
- Fault tolerance
  - Event replay
- High availability
- Processing engine
  - Storm
  - Flink
  - Spark (micro-batching)
- Buffer
  - Kafka