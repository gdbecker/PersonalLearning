## 06_ Data Warehouse Design Methodologies

### Inmon Methodology
- Corporate Information Factory (CIF) created by Bill Inmon, aka the father of data warehouses
- Data Warehouse is "subject-oriented, integrated, time-variant and non-volatile"
- Starts with understanding and identifying the main subject used by the business
- Enterprise Data Warehouse (EDW) is core of this architecture
- All the enterprise data in a single data warehouse, central repository for all business data
- Works with normalized data models
- Data Marts are created separately for each business function
- Referred to as a top-down or data-driven approach
- Inmon CIF architecture components
  - External World and Applications
    - CIF contains all raw data from the external world
    - External apps and source data are located
    - Operational systems or transactional systems (OLTP systems)
    - Data comes in various forms (structured and unstructured)
    - Source systems provide input and data sources to the data warehouse
    - Since it's source data it contains legacy data, duplicates, or inconsistencies
  - Integration and Transformation
    - Contains staging and ETL (or ELT)
    - Integration of data from various sources
    - Transformation of data via ETL or ELT tools
    - Aim is to convert data into corporate friendly data
    - Can be time consuming to set it up correctly
    - Consolidated and transformed data is loaded to ODS and EDW
  - Operational Data Store (ODS)
    - Not the same as a data warehouse, but interim area between the database and data warehouse
    - Subject-oriented: organized around the subject of organization
    - Integrated: hold data from all different sources and entire organization
    - Volatile: changes frequently
    - Current data: up to date detailed data (daily, weekly, monthly)
    - Read-only and not allowed to update
    - Stores snapshot of data from multiple transaction systems
    - Used for real-time or near real-time reporting needs
  - Enterprise Data Warehouse (EDW)
    - Collects and aggregates data from many sources
    - Handles Big Data well and intends to solve Big Data problems
    - Subject-Oriented, Integrated, Time-Variant, Non-Volatile
    - OLAP systems, separate from Operational system
    - Data is usually structured in form of Normalized 3NF (Inmon)
    - Optimized for analytical queries
    - Provides data for Data Marts
  - Data Mart
    - Data input is from Enterprise Data Warehouse
    - Data is organized in departments or business processes
    - Data is stored in de-normalized form
    - Better control over security as data is organized in small, manageable chunks
    - Source data/layer for BI
  - Decision Support System (DSS)
    - Front end apps for business users
    - Allows you to do analysis for historical and recent data
    - Gives you 360 view of your product/customer
    - Helping with data-driven decision making
  - Cross Media Storage Manager
    - Large data warehouses contains dormant data
    - Infrequently accessed data is moved out for archival storage area
    - Improves performance and scalability
- Pros
  - All data is integrated in One Version of the truth for the entire business
  - Low data redundancy and lower possibility of irregularities
  - Easy to add new data source
  - Simplifies business processes
- Cons
  - It's time-intensive
  - Requires knowledge and understanding of the entire business
  - Requires intensive knowledge of data warehouse modeling
  - Isolated data marts
  - Not very agile

### Kimball Methodology
- Created by Ralph Kimball
- Defines data warehouse as "a copy of transaction data specifically structured for query and analysis"
- Starts with identifying key business process and requirements (bottom-up)
- Focus of this approach is to enable BI fast
- Data Marts are created first instead of the enterprise data warehouse
- Dimensional Model - STAR SCHEMA design (de-normalized)
- The model design is built on fact and dimension tables
- Processes of Kimball methodology
  - Follows dimensional modelling technique
  - Enterprise Bus Matrix is used to document and show how schema is designed
  - Data marts are built with star schema being core element of dimensional model
  - Multiple star schemas can exist in the same model
  - Conformed data dimensions (shared attributes) are used to create dimensional data warehouses
- Kimball Bus architecture
  - Data Sources
  - ELT into the Staging Layer
  - Data Marts by business segment (or another factor)
  - BI Tools
- Pros
  - Quick to set up, allowing speedy delivery of business value
  - Agile approach to data modelling
  - Low initial investment
  - Easy to work with due to de-normalization
  - Faster querying and analysis
  - Allows self-service reporting
- Cons
  - Anomalies could arise due to the de-normalization thus addition of redundant data
  - Could be a complex ETL process due to de-normalization
  - New columns added fact tables can cause performance issues
  - Not suitable for changing business requirements
  - Cannot handle all of the needs of an enterprise as Data Marts are business specific

### Inmon vs Kimball
| Attribute | Kimball | Inmon |
|--|--|--|
| Approach | Bottom-up approach | Top-down approach |
| Key Focus | Focus on individual business areas use cases | Focus on enterprise-wide data integration |
| Data Format | De-normalized | Normalized |
| Delivery Time | Quick to set up, driving business value | Takes a lot more effort at the start and requires very deep expertise |
| Maintenance | Low-Medium | Medium-High |

### Hybrid Architecture
- Data Sources
- ETL into the Staging Layer (normalized)
- Enterprise Data Warehouse (relational, normalized 3NF)
- ETL into another Staging Layer
- Dimensional Data Warehouse
  - Consisting of multiple Data Marts (star schema)
- Decision Support System (BI and reporting tools)

### Data Vault Methodology
- Created by Dan Linstedt to overcome the disadvantages of Inmon and Kimball methodologies
- Hybrid approach (3NF and Dimensional Model/Star Schema)
- Store all your raw data and then use it for the specific business need
- Every entity table (hubs) are connected through a link key table
- Hubs are connected to satellites
- Insert Only architecture
- Hash keys are used of composite or surrogate keys
- Data Marts are built on top of the data vault as view to enable reporting
- Complex data model, but easier built incrementally
- Handles streaming data, structured, and unstructured data at scale
- Data Vault components
  - Hub
    - Represents business entity (customer, products, employees)
    - Contains unique business keys (hash)
    - Lost business keys results in losing all associated info
  - Link
    - Establish relationships between different business keys
    - Many-to-many relationship (3NF)
    - Link makes it easier to add new sources
  - Satellite
    - Contains attributes or original tables (descriptive data)
    - Similar to dimensions
    - Subject to change over time
    - Stores changes at granular level (similar to SCD Type 2)
- Data Vault architecture
  - Data Sources
  - ELT into the Data Lake (persistent staging area)
  - Staging Layer (temporary)
  - Data Vault (EDW) - with Raw Vault and Business Vault
    - Raw Vault: all unmodified data, no business value
    - Business Vault: business rules and calculations, not a copy of the Raw Vault, optional
  - Data Mart layer (views) - star schema or OBT
  - BI tools
- Pros
  - Allows historical data tracking
  - Incremental builds that handle multiple sources
  - Able to handle changing business requirements
  - Easy to track and audit your data
- Cons
  - Complex setup
  - High learning curve
  - Not suitable for small data sources
  - Might lead to a loss of a single source of truth
  - Training required

### Inmon vs Kimball vs Data Vault
| Attribute | Kimball | Inmon | Data Vault |
|--|--|--|--|
| Approach | Bottom-up approach | Top-down approach | Hybrid/Agile |
| Key Focus | Focus on individual business areas use cases | Focus on enterprise-wide data integration | Focus on enterprise integration |
| Data Format | De-normalized | Normalized | Data is in raw form (Raw Vault) |
| Delivery Time | Quick to set up, driving business value | Takes a lot more effort at the start and requires very deep expertise | It's quick to set up but very complex to model
| Maintenance | Low-Medium | Medium-High | High |

### One Big Table (OBT) / Wide Table
- Essentially one big de-normalized table
- All joins are removed and pre-aggregated
- Provides faster query performance compared to dimensional modelling
- Storage is affordable on cloud and data warehouses are scalable
- More intuitive to end users (business) if there's only one table
- Ideal for getting started and for smaller projects
- For complex projects, use OBT as part of star schema
- OBT architecture (simple)
  - Data Sources
  - ELT into the Data Lake
  - Staging Layer
  - Warehouse Layer (OBT)
  - Data Marts (view)
  - BI tools
- Data Warehouse architecture + OBT (more complex)
  - Data Sources
  - Extract and Load into the Data Lake
  - Staging Layer
  - Dimensional Data Warehouse Layer
  - Reporting Layer (OBT)
  - BI tools
- Pros
  - Quick data retrieval
  - Easy to get started
  - Quick to develop
  - Suitable for smaller teams
  - Can work pretty well for reporting purposes
- Cons
  - Not ideal for a big data warehouse of vast amounts of data
  - Hard to maintain as de-normalized tables can have duplicates
  - Expensive update operations
  - Difficult to handle slowly changing dimensions
  - Makes data management difficult

### Data modelling then, now, and next
- Data modelling: then
  - Inmon (1990), Kimball (1996), Data Vault (early 2000s)
  - All these approaches and methodologies are useful
  - Back then, storage and compute power was expensive
  - Scaling infrastructure was complicated and process-heavy
  - Front designing schema was required
  - ETL was used to maintain and build pipelines
  - Made best use of available tools back then
  - Dedicated team of experts in data modelling techniques
- Data modelling: now
  - Managed services on the Cloud
  - Compute and storage is cheap
  - Infrastructure scaling is easy
  - Columnar storage removes overhead to performance
  - ETL/ELT tools are powerful
  - Transformation tools such as dbt, dataform make modelling easy
- Data modelling: next
  - Do not ignore these modelling techniques
  - Use the processes and methodologies as it fits your requirements
  - Decide "top-down" or "bottom-up" or mixture of architectures
  - If there's no need to model, don't do it
  - Use data modelling tools (dbt, dataform, etc)
  - Kimball approach:
    - Data management, star schema, showing logical process, easy updates, Kimball lifecycle methodology
  - Inmon approach:
    - EDW principles, components of enterprise data warehouse architecture
  - Data Vault 2.0
    - Agile, Raw Vault, Business Vault, Data auditing