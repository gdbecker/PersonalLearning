## 02_ Snowflake Features and Architecture

### What is Snowflake?
- Data Platform
  - Data Warehouse
    - structured and relational data
    - ANSI standard SQL
    - ACID compliant transactions
    - Data stored in databases, schemas, and tables
  - Data Lake
    - Scalable storage and compute
    - Schema does not need to be defined upfront
    - Native processing of semi-structured data formats
  - Data Engineering
    - COPY INTO and Snowpipe
    - Separate compute clusters
    - Tasks and Streams
    - All data encrypted at rest and in transit
  - Data Science
    - Remove data management roadblocks with centralized storage
    - Partner eco-system includes data science tooling
  - Data Sharing
    - Secure data sharing
    - Data Marketplace
    - Data Exchange
    - BI with the Snowflake Partner ecosystem tools
  - Data Applications
    - Connectors and Drivers
    - UDFs and Stored Procedures
    - External UDFs
    - Preview features such as Snowpark
- Cloud Native
  - Snowflake's software s purpose built for the Cloud
  - All Snowflake infrastructure runs on the Cloud in either AWS, GCP, or Azure
  - Snowflake makes use of Cloud's elasticity, scalability, high availability, cost efficiency and durability
- Software as a Service (SaaS)
  - No management of hardware used to run the software
  - Transparent updates and patches, no downtime
  - Subscription payment model
  - Ease of access
  - Automatic optimization

### Multi-Cluster Shared Data Architecture
- Shared Disk Architecture
  - Pros
    - Relatively simple to manage
    - Single source of truth
  - Cons
    - Single point of failure
    - Bandwidth and network latency
    - Limited scalability
- Shared Nothing Architecture
  - Pros
    - Co-locating compute and storage avoids networking latency issues
    - Generally cheaper to build and maintain
    - Improved scaling over shared-disk architecture
  - Cons
    - Scaling still limited
    - Storage and compute tightly coupled
    - Tendency to over-provision
- Multi-Cluster Shared Data Architecture - what Snowflake provides
  - 3 layers
    - Cloud Services Layer
      - Authentication and Access Control
      - This is a collection of highly available and scalable services that coordinate activities such as authentication and query optimization across all Snowflake accounts
      - Similar to the underlying virtual warehouse resources, the services layer also runs on cloud compute instances
      - Services managed by this layer include:
        - Authentication and Access Control 
        - Infrastructure Management
        - Transaction Management
        - Metadata Management
        - Query parsing and optimization
        - Security
    - Query Processing Layer (Compute Layer)
      - Virtual Warehouses = named abstraction for a cluster of a cloud-based compute instances that Snowflake manages
      - Virtual warehouses execute the processing tasks required to return results for most SQL statements
      - Underlying nodes of a Virtual Warehouse cooperate in a similar way to a shared-nothing compute clusters, making use of local caching
      - Virtual Warehouses can be created or removed instantly
      - Virtual Warehouses can be paused or resumed
      - Virtually unlimited number of virtual warehouses can be created each with its own configuration
      - Virtual warehouses come in many sizes indicating their relative compute power
      - All running virtual warehouses have consistent access to the same data in the storage layer
    - Data Storage Layer
      - Locations of data storage
      - Persistent and infinitely scalable cloud storage layer residing in cloud providers' blob storage service, such as AWS S3
      - Snowflake users by proxy get the availability and durability, guarantees of the cloud providers' blob storage
      - Data loaded into Snowflake is organized by databases, schemas, and accessible primarily as tables
      - Both structured and semi-structured data files can be loaded and stored in Snowflake
      - When data files are loaded or rows inserted into a table, Snowflake reorganizes the data into its proprietary compressed, columnar table file format
      - The data loaded into or inserted is also partitioned into what Snowflake calls micro-partitions
      - Storage is billed by how much is stored based on a flat rate per TB calculated monthly
      - Data is not directly accessible in the underlying blob storage, only via SQL commands

### Snowflake Editions and Key Features
- Standard (intro level)
- Enterprise
- Business Critical
- Virtual Private Snowflake

### Snowflake Object Model
- Organization
  - Manage one or more Snowflake accounts
  - Setup and administer Snowflake features which make use of multiple accounts
  - Monitoring usage across accounts
  - Organization setup
    - Contact Snowflake support
    - Provide organization name and nominate an account
    - ORGADMIN role added to the nominated account
      - Account management capability
      - Enable cross-account features
      - Monitoring account usage
- Accounts have: Network Policy, User, Role, Database, Warehouse, Share, Resource Monitor
  - Account = administrative name for a collection of storage, compute and cloud services deployed and managed entirely on a selected cloud platform
  - Each account is hosted on a single cloud provider
    - AWS, GCP, or Azure
  - Each account is provisioned in a single geographic region
  - Each account is created as a single Snowflake edition
  - An account is created with the system-defined role ACCOUNTADMIN
  - Account URL: using an account locator as an identifier: xy12345.us-east-2.aws.snowflakecomputing.com
    - xy12345 = account locator
    - us-east-2 = region id
    - aws = cloud provider
    - All three above is the account identifier
- Each Database has a Schema
  - Databases can group together multiple schemas
  - Databases must have a unique identifier in an account
  - Must start with an alphabetic character and cannot contain spaces or special characters unless enclosed in double quotes
- Each Schema has: Stage, Pipe, Procedure, Function, Table, View, Task, Stream
  - Schemas must have a unique identifier in a database
  - Schema must start with an alphabetic character and cannot contain spaces or special characters unless enclosed in double quotes 

### Table Types
- Permanent
  - Default
  - Exist until explicitly dropped
  - Time travel: 90 days
  - Fail-safe: yes
- Temporary
  - Used for transitory data
  - Persist for duration of a session
  - Time travel: 1 day
  - Fail-safe: No
- Transient
  - Exists until explictly dropped
  - No fail-safe period
  - Time travel: 1 day
  - Fail-safe: No
- External
  - Query data outside of Snowflake
  - Read-only table
  - Time travel: No
  - Fail-safe: No

### View Types
- Standard
  - Does not contribute to storage costs
  - If source table is dropped, querying view returns error
  - Used to restrict contents of a table
- Materialized
  - Stores results of a query definition and periodically refrehes it
  - Incurs cost as a serverless feature
  - Used to boost performance of external tables
- Secure
  - Both standard and materialized views can be secure
  - Underlying query definition only visible to authorized users
  - Some query optimizations bypassed to improve security

### User-Defined Functions (UDFs)
- UDFs are schema-level objects that enable users to write their own functions in four different languages
  - SQL
  - JavaScript
  - Python
  - Java
- UDFs accept 0 or more parameters
- UDFs can return scalar or tabular results (UDTF)
- UDFs can be called as part of a SQL statement
- UDFs can be overloaded
- JavaScript UDF example
  - JavaScript is specified within the language parameter
  - Enables use of high-level programming features
  - JavaScript UDFs can refer to themselves recursively
  - Snowflake data types are mapped to JavaScript data types
- Java UDF example
  - Snowflake boots up a JVM to execute functions written in Java
  - Snowflake currently supports writing UDFs in Java versions 8.x, 9.x, 10.x, and 11.x
  - Java UDFs can specify their definition as in-lne code or a pre-compiled jar file
  - Java UDFs cannot be designated as secure
- External Functions
  - Code is maintained and run outside of Snowflake
  - Call Lifecycle
    - Client Program (Snowflake UI, SnowSQL, Python...)
    - Snowflake
    - HTTPS Proxy Service
  - Limitations
    - Slower
    - Scalar only
    - Not sharable
    - Less secure
    - Egress charges

### Stored Procedures
- In relational database management systems (RDBMS) stored procedures were named collections of SQL statements often containing procedural logic
- Snowflake stored procedures options
  - JavaScript
  - Snowflake scripting (SQL)
  - Snowpark
    - Python
    - Java
    - Scala

### Stored Procedures and UDFs
| Feature | UDF | Stored Procedure |
|--|--|--|
| Called as part of SQL statement | ✅ | ❌ |
| Ability to overload | ✅ | ✅ |
| 0 or more input parameters | ✅ | ✅ |
| Use o JavaScript API | ❌ | ✅ |
| Return of value optional | ❌ | ✅ |
| Values returned usable in SQL | ✅ | ❌ |
| Call itself recursively | ❌ | ✅ |

### Sequences
- Object that can be created in Snowflake
- "create sequence INCREMENT_SEQUENCE start = 0 increment = 5;"
- Used for
  - INSERT INTO TABLE
  - DEFAULT VALUE FOR A COLUMN TABLE

### Tasks
- This is an object used to schedule the execution of a SQL statement, a stored procedure, or procedural logic using Snowflake Scripting
- Task workflow
  - ACCOUNTADMIN role or CREATE TASK privilege
  - Write the task statement (using Task Name, Warehouse Definition, Triggering Mechanism, Query Definition)
  - Start the task
  - Tasks can be chained to form a DAG (directed acyclic graph)

### Streams
- A stream is an object created to view and track DML changes to a source table - inserts, updates, and deletes
- Create a stream
- Then query the stream

### Billing
- Main levels
  - On-Demand
    - Pay for usage as you go
    - Great for more variable usage demands
  - Capacity
    - Pay for usage upfront
    - Rates are lower
- You're paying for:
  - Virtual Warehouse Services
  - Cloud Services
  - Serverless Services
  - Storage
  - Data Transfer
- Costs calculated using
  - Credits
    - Credits = Snowflake billing unit of measure for compute resource consumption
    - Virtual warehouse services
      - Credit calculated based on size of virtual warehouse
      - Credit calculated on per second basis while a virtual warehouse is in 'started' state
      - Credit calculated with a min of 60 seconds
    - Cloud services
      - Credits calculated at a rate of 4.4 credits per compute hour
      - Only cloud services that exceed 10% of the daily usage of the compute resources are billed
      - This is called the Cloud Services Adjustment
    - Serverless services
      - Each serverless feature has its own rate per compute house
      - Serverless features are composed of both compute services and cloud services
      - Cloud Services Adjustment does not apply to cloud services usge when used by serverless features
  - Dollar value 
- Data Storage and Transfer Billing
  - Data Storage
    - Calculated monthly based on the average number of on-disk bytes per day in the following locations
      - Database tables
      - Internal storage
    - Costs calculated based on a flat dollar value rate per terabyte (TB) based on:
      - Capacity or on-demand
      - Cloud provider
      - Region
  - Data Transfer
    - Data transfer charges apply when moving data from one region to another or from one cloud platform to another
    - Unloading data from Snowflake using COPY INTO <location> command
    - Replicating data to a Snowflake account in a different region or cloud platform
    - External functions transferring data out of and into Snowflake

### Connectors and Drivers
- Python, Go, PHP, .NET, NodeJS, Spark, Kafka, JDBC, ODBC
- Snowflake partner tools
  - Business Intelligence
    - Tableau, Power BI, Qlik Q, ThoughtSpot
  - Data Integration
    - dbt, Informatica, Pentaho, Fivetran
  - Security and Governance
    - Collibra, Datadog, Vault, data.world
  - SQL Development and Management
    - SQLDBM, Seekwell, Agile Data Engine
  - Machine Learning and Data Science
    - DataRobot, data iku, Amazon SageMaker, zepl

### Snowflake Scripting
- This is an extension for Snowflake SQL that adds support for procedural logic
- It's used to write stored procedures and procedural code outside of a stored procedure
- SnowSQL and the Classic Console do not correctly parse Snowflake's Scripting blocks; they need to be wrapped in string constant delimiters like dollar signs
- Branching Constructs are available
  - if/else or case statements
- Looping Constructs are available
  - for, while
  - Can use a "cursor" in a loop
  - RESULTSET = a SQL data type

### Snowpark
- It's an API accessed outside of the Snowflake interface
- Supports Java, Scala, and Python
- Main abstraction is a dataframe
- Lazily-evaluated/executed
- Pushdown computation