## 02_ Databases

### Database Definition
- Where a collection of data is stored
- Powers apps and companies
- Could contain day to day business transactions
- Allowed easier management analysis of data
- Use cases
  - Online retailer - data such as customer names, phone numbers, payment methods, etc
  - Music streaming service - song and artist info, customer favorite tracks, etc
- Managed by DBMS (Database Management System)
  - Allows users to interact with data stored in a database
- Data is stored in a table as rows and columns - one way (there are other ways such as columnar, graph, etc)
- Uses SQL (Structured Query Language) to access stored data

### SQL
- Language used to interact with your database
  - Such as retrieving, manipulating, or storing data within your database
- SQL has been around since 1979 and gone through many iterations
- Variation of syntax between various databases
- Most modern databases use ANSI (American National Standards Institute) standard SQL

### Database Management System (DBMS)
- Provides a UI for people to interact with data stored in databases
- Popular DBMS options
  - SQL Server
  - MySQL
  - Oracle Database
  - PostgreSQL
  - SQLite
  - MariaDB
  - Amazon RDS
  - Google CloudSQL
- DBMS = software that store vast amounts of data into tables
- Allows you to manage and retrieve your data
- Enables concurrent data access
- Supports granular user management
- Allows to perform backups
- Manage constraints

### Spreadsheet vs Database
- Spreadsheets
  - Allow to store data and can often be called databases
  - Popular across the industry
  - Easy way to store data and produce reports
  - Ability to write formulas, do calculations and even some allow you to automate tasks by providing macros functionality
  - Spreadsheets have become cloud native, allowing collaborative work
  - There is a fundamental difference between databases and spreadsheets

| Spreadsheets | Databases |
|--|--|
| Limit of 1,048,576 rows and 16,384 columns | No limit |
| Most of the time loads all the data | Only load the data in your request (Query) |
| Static (unless you write a formula, you'll have to manually change every cell) | Dynamic (change one place, gets updated everywhere) |
| Easy to create | Difficult |
| Difficult to find info as a spreadsheet grows | Easier and faster using SQL |

### Different types of databases
- SQL databases
  - Relational (OLTP)
    - OLTP = Online Transactional Processing
    - Used for transaction-focused tasks, retail apps, CRM
    - Row-based storage
    - Data is structured
    - Optimized for insert and update operations
    - Required to be available 24/7
    - It's an original source of data (source of truth)
    - Generates large results
    - Straightforward queries which returns small number of rows
    - Queries such as accessing individual records or update customer phone-number
    - Highly normalized with many tables
    - Minimize data redundancies (no duplicate data)
    - Prefer normalized tables
    - Most of the time requires joining to multiple tables to query results
    - Schema is the entity model (usually 3NF)
    - Data type and schema is predefined most of the time
    - Optimized for data collection not for aggregations
    -  Shouldn't be used for reporting
    -  OLTP systems are **ACID compliant**
    -  OLTP Query Patterns
       -  Show current user profile details based on customer login id
       -  What is customer last login time?
       -  Show customer transaction history
       -  Update customer phone number
       -  Create new record for a product
       -  Add a product to customer wishlist
  - Analytics (OLAP)
    - OLAP = Online Analytical Processing
    - Efficiently process Big Data
    - Answer analytical queries
    - Building blocks of Business Intelligence (BI) tools
    - Columnar-based -> can be highly compressed
    - Only needs to read in relevant data
    - Data derived from OLTP databases (plus third-party sources)
    - Copy of transaction data
    - De-normalize with fewer tables (Facts and Dimensions)
    - Queries usually have fewer joins to increase performance and query speed
    - Insert and Update speed is less important
    - Complex aggregations
    - OLAP examples
      - Google BigQuery, Amazon Redshift, PostgreSQL, Snowflake, Firebolt
    - 
- NoSQL databases
  - Key-value stores
  - Document database
  - Wide column database
  - Graph database
  - Search engine database

### ACID Compliant
- Why ACID compliant?
  - Strong consistency ensuring integrity of the transactions
  - One transaction needs to be successful before another one begins
- Example of a bank transaction
  - Bank transfer either happens or not, if not successful both account have same initial state
  - We don't want partial success
  - OLTP systems ensure this by being ACID compliant
- ACID acronym
  - A = Atomicity
    - Transaction either happens or does not happen at all
  - C = Consistency
    - Data is consistent before and after the transaction
  - I = Isolation
    - Multiple transactions happen simultaneously without interfering with each other
  - D = Durability
    - Successful transaction changes aren't vulnerable to system failure

### OLTP/OLAP Summary
| Attribute | OLTP | OLAP |
|--|--|--|
| Storage Type | Row-based | Column-based |
| Function | Operational | BI, Decision making, analysis |
| Data Source | Current data, operational data, day-to-day | OLTP, third-party systems, IoT |
| Data Type | Structured (current) | Un-structured data / JSON (historical) |
| Query Types | Simple, multiple joins, return few records | Complex, fewer joins, return large records |
| Speed | Very fast transactions types | Slow to medium, depends on query complexity |
| Database Design | Normalized (many tables), relational | De-normalized (few tables), star/snowflake schema |
| Inserts/Update/Delete | Fast inserts (usually from an app), Updates are unscheduled and frequent | Batch jobs, Update and Delete are usually from source and scheduled |
| Users | Operational users | Analysts / data scientists / data engineers |

### What is a NoSQL database?
- NoSQL referred to as "Not only SQL"
- Non-relational database
- Able to handle different types of data other than relational data (RDBMS)
- Designed to handle large volumes of distributed data
- Suitable for use cases where fast horizontal scaling is important
- Appropriate for unstructured and semi-structured data
- Usually has a simpler schema
- Goal of NoSQL is not to replace SQL but to work together
- Many types of NoSQL databases exist for different use cases

### NoSQL: Key-Value Stores 
- Examples: redis, Amazon DynamoDB, Google Memorystore
- Simple, only stores key-value pairs
- Retrieves values by associated keys
- Suitable when speed is of most important
- Data is not complex
- Values can be strings, sets, arrays, etc
- Use cases
  - Shopping carts
  - Storing user sessions
  - Game session management
  - API reply stored in cache
  - Product recommendations

### NoSQL: Document Stores
- Examples: mongoDB, Couchbase
- Non-relational database designed to store and query JSON-like documents
- Stores each record and data within a single document
- No requirement to create a schema before you load data
- Can scale horizontally very well via sharding
- Collection = multiple documents
- A collection can contain other collections
- Use cases
  - Catalogs
  - Web apps / e-commerce
  - IoT
  - Realtime analytics

### NoSQL: Wide Column Stores
- Examples: cassandra, Apache Hbase, Google Bigtable
- Stores ata in flexible columns instead of rows
- Highly scalable and able to handle ambiguous and complex data types
- Names and format of the columns can vary across rows in the same table
- Very fast to retrieve value from column due to nature of columnar storage
- Not optimized for joins and shouldn't be used for:
  - If database requirement changes frequently
  - Ad-hoc query patterns
  - High level of aggregation
- Types of columns
  - Single Column
  - Super Column (multiple columns together)
  - Column Family (when a row key is assigned to one super column)
  - Super Column Family (when a row key is assigned to multiple super columns)
- Use cases
  - Real-time data / analytics
  - Time series
  - Trading data
  - IoT (Internet of Things)

### NoSQL: Graph Databases
- Examples: neo4j, DataStax Enterprise Graph
- Purpose built database to store and navigate relationships
- Relationships are first-class citizen and it's stored alongside the data in the model
- Data entities are stored in **nodes**, relationships are stored in **edges**, information associated to the nodes are **properties**
- Queries are very fast due to relationships not being calculated during query time; instead they are stored in the database
- Use cases
  - Recommendation engines
  - Fraud detection
  - Social networks
  - Logistics
  - Metadata management
  - Natural Language Processing

### NoSQL: Search Engine Databases
- Examples: elasticsearch, Solr
- Databases dedicated to search of data in form of web search or full-text search
- Data is stored in JSON document form and is schema-less
- Uses indexes to categorize the similar characteristics among data
- Solves searching of textual content in databases by allowing natural language search
- Use cases
  - Full-text search
  - Time-series data
  - Logging and analysis
  - Auto suggestion / auto completion

### SQL/NoSQL Summary
| Attribute | SQL | NoSQL |
|--|--|--|
| Volume | GB - TB | TB - PB |
| Velocity | Handles low velocity | Handles high velocity |
| Variety | Structured data (tables) | Unstructured data / semi-structured data |
| Consistency | Strong, ACID compliant | Less rigid, some provide option for consistency |
| Schema | Normalized and strict schema design | Generally denormalized, schema design usually varies |
| Scalability | Vertically scalable by upgrading hardware | Horizontally scalable by partitioning |
| Data model | Relational | Non-relational |

### On-Prem vs Cloud
- On-Prem
  - Software or database is installed and running on the premises of the organization
  - Usually requires team of engineers to maintain hardware and software
  - Database / data warehouse backups are done by data warehouse experts on scheduled time
  - Due to many moving parts, upgrades require some downtime
  - Higher cost due to upfront hardware cost and additional maintenance resource
- Cloud
  - Hosted by the third-part as IaaS
  - Cloud service provider takes care of cost associated with maintenance, resourcing and bandwidth
  - Usually provides good SLAs (some up to 99.9%) to keep the infrastructure up
  - Companies only pay for what they use so no large upfront cost
  - Usually monthly subscription
  - Allows instant provisioning of resources as everything is pre-configured by the provider
  - Accessible only via a web-browser
| Attribute | On-Prem | Cloud |
|--|--|--|
| Speed | Slow to spin up servers and resources | Very quick to spin up servers and resources |
| Scalability | Require significant infrastructure and resource investment | Gives you freedom to choose what resources to provision and what size |
| Storage | Internal storage. You pay for unused resources and takes time to expand storage as you need to purchase hardware | Cloud storage. You only pay for what you use. Able to expand from GB to PB in a matter of minutes with multi-region availability |
| Security and Compliant | You control how secure you want your infrastructure to be and better control over your data | Most of the cloud service providers have very secured data centers and your data is securely stored inside vendor's storage system |
| Disaster Recovery | Server failures and recovery plans are responsibility of dedicated team | Cloud vendors usually have disaster recovery plans and guidelines while redundancy and scalability make it easier |
| SLA | During outages such as hardware failure, you are responsible for getting things up and running | Usually cloud provider will fix these issues for you and you get credits as compensation for the downtime |
| Cost | High upfront cost | Low upfront cost / monthly subscription model |