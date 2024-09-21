## 08_ Storage, Data Protection and Data Sharing

### Storage Layer
- Centralized, scalable storage layer for your schemas
- Scalable blob storage
- Copy processes
- Structured and semi-structured data compatible
- Transform and download table data
- Optimized storage in partitions

### Micro-Partitions
- Snowflake partitions along the natural ordering of the input data as it's inserted/loaded
- Micro-partitions are the physical files stored in blob storage and they range in size from 50-500mb of uncompressed data
- Micro-partitions undergo a re-organization process into the Snowflake columnar data format
- Micro-partitions are immutable, they are write-once and read many
- Planning
  - Metadata allows Snowflake to optimize a query by first checking the min-max metadata of a column and discarding micro-partitions from the query plan that are not required
  - The metadata is typically considerably smaller than the actual data, speeding up query time

### Time Travel and Fail-Safe
- Data lifecycle
  - Current Data Storage
  - Time Travel Retention
  - Fail-Safe
- Time travel
  - Enables users to restore objects such as tables, schemas, and databases that have been removed
  - Enables users to analyze historical data by querying it at points in the past
  - Enables users to create clones of objects from a point in the past
- Time travel retention period
  - Configured with the parameter: DATA_RETENTION_TIME_IN_DAYS
  - Default retention period on the account, database, schema and table level is 1 day
  - On the Standard edition of Snowflake, the min value is 0 and max is 1 day and for Enterprise, the max is increased from 1 to 90 days
  - Temporary and transient objects can have a max retention period of 1 day across all editions
- Accessing data in time travel
  - AT
    - This keyword allows you to capture historical data inclusive of all changes made by a statement or transaction up until that point
    - Three parameters are available to specify a point in the past
      - TIMESTAMP
      - OFFSET
      - STATEMENT
  - BEFORE
    - This keyword allows you to select historical data from a table up to, but not including any changes made by a specified statement or transaction
    - One parameter is available to specify a point in the past:
      - STATEMENT
  - UNDROP
    - This keyword can be used to restore the most recent version of a dropped table, schema or database
    - If an object of the same name already exists, an error is returned
    - To view dropped objects you can use:
      - SHOW TABLES HISTORY;
- Fail-Safe
  - It's a non-configurable period f 7 days in which historical data can be recovered by contacting Snowflake support
  - It could take several hours or days for Snowflake to complete recovery
  - Fail-Safe is only enabled for permanent objects, not temporary or transient

### Cloning
- Process of creating a copy of an existing object within a Snowflake account
- Uses can clone:
  - Databases
  - Schemas
  - Tables
  - Streams
  - Stages
  - File Formats
  - Sequences
  - Tasks
  - Pipes (reference external stage only)
- It's a metadata only operation, copying the properties, structure, and configuration of it's source
- Does not contribute to storage costs until data is modified or new data is added to the clone
- Zero-Copy Cloning
  - Changes made after the point of cloning then start to create additional micro-partitions
  - Changes made to the source or the clone are not reflected between each other, they are completely independent
  - Clones can be cloned with nearly no limits
  - Because cloning is a metadata-only operation, it's very quick, enabling interesting use cases such as rapid integration testing
- Rules
  - A cloned object does not retain the privileges of the source object, with the exception of tables
  - Cloning is recursive for databases and schemas
  - External tables and internal named stages are never cloned
  - A cloned table does not contain the load history of the source table
  - Temporary and transient tables can only be cloned as temporary or transient tables, not permanent tables
- Cloning with time travel
  - Time Travel and Cloning features can be combined to create a clone of an existing database, schema non-temporary table and stream at a point within their retention period
  - If the source object did not exist at the time specified in the AT | BEFORE parameter, an error is thrown

### Replication
- Feature in Snowflake which enables replicating databases between Snowflake accounts within an organization
- A database is selected to serve as the primary database from which secondary databases can be created in other accounts
- When a primary database is replicated, a snapshot of its database objects and data are transferred to the secondary database
- The secondary database can be periodically refreshed
- External tables, event tables, temporary stages and class instances are currently not replicated
- Refreshing a secondary database can be automated by configuring a task object to run the refresh command on a schedule
- The refresh operation fails if a primary database contains an event or external table type
- Privileges granted to database objects are not replicated to the secondary database
- Billing for database replication is based on data transfer and compute resources

### Billing
- Data storage costs are calculated monthly based on the average number of on-disk bytes for all data stored each day in a Snowflake account
  - Database tables: current data storage, time travel retention, dail-safe
  - Internal stages
- The monthly costs for storing data in Snowflake is based on a flat rate per terabyte
  - $42/TB/month for customers deployed in AWS - EU (London)
- Data Storage Pricing
  - Cost determined by Cloud Provider, Region, and Pricing Plan

### Secure Data Sharing
- Allows an account to provide read-only access to selected database objects to other Snowflake accounts without transferring data
- Sharing is enabled with an account-level SHARE object
- It's created by a data provider and consists of two key configurations:
  - Grants on database objects
  - Consumer account definitions
- An account can share the following database objects:
  - Tables
  - External tables
  - Secure view
  - Secure materialized views
  - Secure UDFs
- Data consumers create a database from a SHARE which contains the read-only database objects granted by the data provider
- Sharing is not available on the VPS edition of Snowflake
- Data Provider
  - Database objects added to a Share become immediately available to all consumers
  - Only one database can be added per share
  - No hard limits on the number of Shares you can create or the number of accounts you can add to a Share
  - To execute a create Share command a user must have a role with the CREATE SHARE privilege granted
  - Access to a Share or database objects in a share can be revoked at any time
  - A Share can only be granted to accounts in the same region and cloud provider as the data provider account
- Data Consumer
  - Only one database can be created per Share
  - A data consumer cannot use the time travel feature on shared database objects
  - A data consumer cannot create a clone of a shared database or database object
  - To create a database from a Share, a user must have a role with the IMPORT SHARE privilege granted
  - Data consumers cannot create objects inside the shared database
  - Data consumers cannot re-share shared database objects
- Reader Account
  - A reader account provides the ability for non-Snowflake customers to gain access to a provider's data
  - Can't insert data or copy data into an account
  - A reader account can only consume data from the provider account that created it
  - Provider accounts assume responsibility for the reader account they create and are billed for their usage

### Data Exchange
- Is a private version of the data marketplace for accounts to provide and consume data
- For a Snowflake account, this is set up with Snowflake support by providing a name and description
- The Snowflake account hosting a Data Exchange is the Data Exchange Admin and can manage members, designate members as providers and consumers, and manage listing requests 