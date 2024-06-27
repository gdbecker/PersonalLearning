## 03_ Data Warehouses

### What is a data warehouse?
- Not the same as a database, but stores copy of OLTP database
- Stores data from other sources (such as IoT, analytics, metadata)
- Relational database designed for analytical workload
- Collects and aggregates data from many sources
- Handles big data well and intends to solve big data problems
- OLAP systems, separate from Operational system
- Data is usually structured in form of Dimensional model
- ACID requirement is less strict than a database system
- Enable BI which provide business insights
- Example use cases
  - Social media platforms -> their data warehouses drive insights for ad compagins
  - Banking -> data warehouses let them see spending patterns and any fraud detection
  - Governments -> data warehouses help detect tax fraud and analyze tax payment patterns
- Characteristics
  - Subject-oriented
    - focused on a subject (such as customers, marketing, sales)
    - Doesn't focus on operational day-to-day
    - Simple concise view around a specific subject
    - Optimized to answer analytical questions
    - Exclude unhelpful data to support decision making
  - Integrated
    - Hold data from all different sources and entire organization
    - Well-defined naming conventions, measures and attributes
    - Extracted data is uniformly transformed
  - Time-variant
    - Data is organized in time periods
    - Allows historical analysis
    - Contains element of time either implicitly or explicitly
    - Once data is stored, it can't be modified
  - Non-volatile
    - Data is permanent, doesn't get deleted
    - Data is read-only
    - Only loading and accessing data is allowed
    - Data keeps growing
    - Data is refreshed at scheduled times
    - Does not require transaction process and concurrency control mechanisms
    - Delete, update, inserts are omitted

### Data Warehouse Benefits
- Historical insights
- Improves quality of data and lineage
- Increase efficiency
- Fast query results
- BI capability
- High reliability and scalability
- Connects on-prem and Cloud
- Enhanced data security
- Increase in revenue
- Competitive advantage

### Data Warehouses Summary
- Easy access to data as everything is in one place
- Instance access to data from multiple sources
- Ad-hoc analysis is much easier to query
- Gives you full 360 view of customer or product (since you have different sources)
- Historical data analysis is easier due to snapshots of time periods
- Gives consistent data quality as it's controlled through the modelling process, ELT/ETL and assertions
- Better data governance from one central place (no data silos)
- Clear lineage of data
- Becomes a foundation for BI
- Allows you to have better decision making

### Data Warehouse Architecture
- Architecture approaches
  - Single tier architecture
    - Only a data warehouse layer
    - Not great for high complexity
  - Two tier architecture
    - Add a data lake
    - Add an additional staging layer
    - Prevents data warehouses from being the main place where data is being stored
    - Much better and preferred than Single tier
  - Three tier architecture
    - Introduce a data mart layer
    - Most popular option
    - Better flow of data and preps for BI reports
    - Bottom Tier: Data Sources, Data Lake, Staging Layer
    - Middle Tier: Data Warehouse Layer, Data Mart Layer
    - Top Tier: BI Tools

### Data Sources
- Bottom tier
- Any source of data you can retrieve
- Data from a CRM, IoT devices
- Internal tools used within a business
- Structured or unstructured data
- A copy of OLTP databases
- Mostly messy data that requires cleaning

### Data Lake
- Bottom tier
- What is a Data Lake?
  - This is where you store everything
  - Structured, unstructured, images, logs
  - Data Lakes become your single store of data
  - Data is in its raw form, no transformation is done at this stage
  - Since storage in cloud is no longer expensive these data, you store everything
  - You only use what is important via ingesting data to Data Warehouse or any other layer
  - You don't overwrite anything, just keep on adding new data
  - Also gives you better data governance, no more data silos
- The 5 V's
  - Volume: the raw data
  - Velocity: the speed of data processing
  - Variety: different types of data
  - Veracity: level of trust in the data
  - Value: the value within the data
- Why use a Data Lake?
  - Unlimited scalability and flexibility
  - Allows economic storage of files
  - Easier data management
  - Improves governance and security
  - Data in the lake is not limited to relational or transactional
  - You never need to move the data
  - Allows easier access to perform AI and ML tasks
  - Enhances analytics
- Storage options
  - Google Cloud storage
    - Standard, Nearline, Coldline, Archive
  - AWS S3
    - Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive

| Attribute | Data Lake | Data Warehouse |
|--|--|--|
| Data Structure | Structure, unstructured, raw from all the available sources | Structured, processed data after all transformations clean up as been applied |
| Users | Data engineers, data scientists | BI developers, BI analysts |
| Schema-Position | Schema-on-read | Schema-on-write |
| Purpose | Location to store all of your raw data | Defined purpose for BI, reporting layer |
| Storage | Enables low cost storage for vast amounts of data | Can be expensive to store large amounts of data |

### Staging Layer
- Bottom tier
- Sits between the Data Lake and Target Layer
- Stores raw data from Data Lake
- Multiple data sources are aggregated at the Staging Layer
- Data cleaning, transformation, and validations
- Standardized naming conventions
- Also stores data that might not be used in the Data Warehouse immediately
- ETL or ELT tools are used to ingest data to Staging Layer
- Storing data in Staging Layer makes processing easier

### Data Warehouse Layer
- Middle tier
- Transformed and formatted data from the Staging Layer
- Data Modelling Approach (Dimensional model, OBT, Data Vault)
- Different in structure from source data due to modelling
- Data masking / consideration of PII and No-PII data
- Various optimization strategies
- Data access considerations
- Metadata info is also available (or stored) for data lineage

### Data Mart Layer
- Middle tier
- Definition of Data Mart varies
- It's usually a subset of a Data Warehouse
- Data input is from Data Warehouse
- Data is organized in departments or business process
- Better control over security as data is organized in small, manageable chunks
- Source data/layer for BI

| Attribute | Data Warehouse | Data Mart |
|--|--|--|
| Subject Area | Multiple subjects (entire company's data) | Subject oriented (department - finance, sales, marketing, etc) |
| Sources | Collects from multiple places including OLTP | Mainly derived from Data Warehouse |
| Granularity | Lowest level of granularity | Highest level of granularity (aggregated or summarized) |
| Focus | Data ingestion and decision making process | Strategic decision making / BI |
| Size | Optimized for holding large volume of data (GB / TB +) | Optimized for analysis and data access (< 1000 GB) |
| Implementation Time | Months to years | Few months |
| Access | Tightly controlled with various levels of permissions at organizational level | Promotes ease of access, departmental access |

### Business Intelligence
- Top tier
- BI is a combo of tolls, technology and strategy
- It's part of front-end decision support system
- Allows you to do analysis for historical and recent data
- Gives you 360 view of your product or customer
- Helping with data-driven decision making
- BI tools
  - Tell stories with data using tools like Looker, Tableau, Power BI, etc
  - These sit on top of your data warehouse
  - Sometimes they can connect directly to other systems too
  - Traditionally, BI involves relying on technical team with a static report
  - Modern day BI now allows self-serve BI platforms where data and analysis types go in the hand of business users

### BI Tool: Looker
- API first data platform which sits on top of your databases
- LookML language for data modelling
- Definitions and metrics are defined centrally leading to a single source of truth for KPIs and analytics
- Access to data is governed centrally
- Built-in caching capabilities
- Allows true self-serve BI
- Git version control, allowing you to implement various git strategies

### BI Tool: Data Studio
- Direct integration from a Google ecosystem
- Data studio can connect to multiple sources of data
- Highly effective charts
- Real-time dashboard collaboration
- Simple and efficient
- Integrated with Big Query to allow instantly visualized query results

### ETL and ELT
- ETL = Extract, Transform, Load
  - Mix of techniques and tools you use to:
    - Connect to source data
    - Extract and transform the data (in-memory)
    - Load transformed data into a data warehouse
  - Advantages
    - Allows you to perform complex transformations before the loading process
    - Loads only important or required data for analytics/reporting
    - Unnecessary data stays within the source system; reduces costs
    - Allows, speedy and efficient analysis
    - Removes or encrypts data before putting into data warehouse (GDPR, HIPAA)
  - Disadvantages
    - Requires a data engineer to implement these tools
    - Complex flow and transformations process before reaching the warehouse, creating potential bottleneck for engineers
    - Only extract necessary data limiting the data available to BI/team
    - Creates going back and forth from other teams requesting access to more data
    - Difficult to achieve full self-service BI solution
    - Requires extreme care, management, and well-defined workflow
- ELT = Extract, Load, Transform
  - Advantages
    - More flexible than ETL approach, stores any type of data
    - Enables to perform analysis on various data types with ease
    - Ensures architecture future proof due to the data lake handling data growth
    - No longer requires data engineers to set up complicated pipelines
    - Data access security happens within the data warehouse
  - Disadvantages
    - More data storage space required
    - Could be slow due to multi persistent of data
    - Low compliance due to everything stored
    - Security risk if not handled PII data correctly
    - Fairly new technology due to popularity in Cloud Solutions

### Each Step in Detail
- Extract
  - Get data from the original data source (structured, unstructured)
  - Data goes into a temporary or persistent storage area (cloud, on-prem, or both)
  - Determine batch or streaming data
  - Data Validation checks such as format, null issues, new columns, etc
- Transform
  - Cleansing: solving and cleaning out any inconsistency 
  - Standardization: by applying formatting rules
  - De-duplication: removing duplicates and redundancy
  - Verification: flagging anomalies and removing unusable data
  - Sorting: organizing by type
  - Other tasks: any other tasks/rules you want to apply to improve quality
- Load
  - Loading the transformed data into a data warehouse to be consumed by BI tools
  - Conduct data quality checks during load
  - Recovery mechanism to handle load failure
  - Types of loading:	
    - Full Refresh Load: load all data as fresh
    - Incremental Load: schedule at intervals
- Tools
  - Airflow
  - SQL Server
  - Fivetran
  - talend
  - Stitch
  - alteryx
  - xplenty

| Attribute | ETL | ELT |
|--|--|--|
| Volume | Small/medium data volume | Large data volume |
| Load Time | Slower than ELT due to transformation before loading into data warehouse | Fast loading as transformations happen later |
| Transformation | Outside of warehouse, usually within a staging area, transformation time increases based on size of data | Transformation within the warehouse, data size/volume is not an issue |
| Analysis Time | Faster analysis | Slower than ETL |
| Data Type | Prefer structured data | Structured and unstructured |
| Complexity | Compute-intense and complex | Less complex due to transformation within SQL |
| Cost | High cost | Low cost |
| Availability | Only required for reporting/analysis | Everything can be accessed from the Data Lake |
| Maintenance | High maintenance due to on-prem solutions | Low maintenance due to cloud solutions |
| Data Governance and Security | Removes PII before it's loaded | Option to remove PII before load but requires more work; PII is removed after loading process |
| Implementation | Easier to find experts, ETL tools are matured | Difficult to find experts due to concept being fairly new; ELT tools are evolving |
| Usability | Developers (requires extra steps for business users), fixed timeline and tables, extra work for additions | Developers to business users, flexible and agile, allows ad-hoc reports |