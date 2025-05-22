## 02_ Theory

### Data Maturity Model: Maslow's Pyramid of Data
- From bottom to top:
  - Data collection
    - Extraction of data from different sources
    - Could be batch or streaming, depends on the source and what you need
    - Different formats and frequencies
  - Data wrangling
    - Find inconsistencies and missing data
    - Clean things up as much as possible
    - Fixing errors and wrong formats
  - Data integration (stopping here for this course, from the top)
    - Writing data to the target location (typically the data warehouses)
    - Analytics workload performed at this stage
  - BI and analytics
  - Artificial intelligence

### ETL and ELT
- ETL = extract, transform, load
  - Lower storage requirement
- ELT = extract, load, transform
  - Some warehouses are better equipped to handle transformation steps
  - High scalability
  - Easier testing and debugging
  - Higher flexibility

### Data Warehouses
- Databases that let you do high performance analytics workloads
- Performant engine lets you use SQL
- On-premise warehouses
  - Oracle, IBM, Teradata
  - Tougher to scale
  - Governance and regulatory compliance
- Cloud based
  - Amazon Redshift, Google BigQuery, Snowflake
  - Easier to scale
  - Cost efficiency
- You pay for the compute nodes, whether they are used or not

### Data Lakes
- Can handle "external tables" to store data outside of the warehouse
- Can store multiple structured types of data
  - Unstructured, structured, and semi-structured

### Data Lakehouses
- Combines best features of data warehouses and data lakes
- Ensure consistency with ACID transactions
- Handles all types of structured data

### What led to the modern data stack?
- "As the databases grew in popularity in the 1970s, ETL was introduced as a process for integrating and loading data for computation and analysis, eventually becoming the primary method to process data for data warehousing projects." - IBM
- ETL
  - Usually had a staging area in the same data warehouse where the transformed data would be stored
  - Higher storage costs
- Storage prices continue to drop
- Transistor prices continue to drop
- Faster data transmission over the network
- Critical change: SMP data warehouses
  - SMP = Symmetric Multiprocessing
- Rise of the MPP cloud data warehouses
  - MPP = massively parallel processing
  - Examples: AWS Redshift, Google BigQuery, Snowflake, Azure
  - Can be scaled horizontally by adding additional compute nodes
- Storage and compute were decoupled
  - Able to shut down compute nodes when you don't need them
  - Can scale storage more dynamically, same for compute needs
  - Data lives in a shared data store like Azure Blob Storage or AWS S3, and the compute can be configured to point to the same datasets in the shared storage area
- Row-oriented databases
- Rise of column-oriented databases
  - Typically better for OLAP (online analytical processing) applications
- The modern data stack in the AI era
  - MDS is more horizontally integrated than vertically integrated
  - Appearance of not only tools for each layer of the stack, but DevOps
  - Rise of the data analyst (analytics engineer)
  - dbt revolutionizes the "T" in ELT
  - ELT is typically used in the modern data stack

### Slowly Changing Dimensions (SCD)
- Type 0
  - Retain the original
  - Not updating the data warehouse table when a dimension changes (so only the source table is changed)
- Type 1
  - Overwrite
  - Updating the data warehouse table when a dimension changes, overwriting the original data
  - Don't need to maintain history of what the value was before
- Type 2
  - Add new row
  - Keeping the full history: adding additional (historical data) rows for each dimension change
  - But data storage also increases
- Type 3
  - Add new attribute
  - Keeping a limited data history, by adding separate columns for the original and current values