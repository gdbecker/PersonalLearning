## 05_ Implement an Azure Synapse Analytics Dedicated SQL Pool

### Azure Synapse Analytics (cloud-based solution)
- Azure Synapse Components
  - Synapse Workspace: a collection of data sources, integration pipelines, and connected services
  - Synapse Studio: web application for data exploration and analysis
  - Azure Data Lake: petabyte scale storage solution for Parquet, CSV, TSV, and JSON data files
- Synapse Workspace data sources
  - Serverless SQL pools: allow query execution without provisioning resources; billing is based on the amount of data processed
  - Serverless Spark pools: create sessions for working with big data stores; billing is based on the amount of resources used during the session
  - Dedicated SQL pools: pre-provision an amount of storage, CPU, and memory resources ahead of time to service a traditional data warehouse architecture
- Dedicated SQL Pool architecture
  - User connects to a Dedicated SQL Pool Control Node
  - This node connects to an MPP engine
  - The MPP engine uses multiple compute nodes for processing
- Benefits of Dedicated SQL Pools
  - The number of compute nodes can be scaled up and down between 1 and 60
  - Compute resources can be paused and de-allocated temporarily
  - Storage and compute resources are separate, so data will remain safely even while compute resources are paused
- cDWU
  - Compute data warehouse unit
  - An abstracted bundle of cPU, memory, and I/O resources
  - Currently ranges from 100 to 30,000 cDWUs
  - Start small and scale up