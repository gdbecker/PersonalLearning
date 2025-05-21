## 04_ Theory - The Modern Data Stack

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
  - 