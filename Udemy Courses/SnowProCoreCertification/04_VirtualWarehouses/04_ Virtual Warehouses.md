## 04_ Performance Concepts: Virtual Warehouses

### Virtual Warehouse Overview
- Named abstraction for a Massively Parallel Processing (MPP) compute cluster
- They execute:
  - DQL operations (SELECT)
  - DML operations (UPDATE)
  - Data loading operations (COPY INTO)
- As a user you only interact with the named warehouse object, not the underlying compute resources
- Spin up and shut-down a virtually unlimited number of warehouses without resource contention
- Configuration can be changed on the fly
- Contain local SSD storage used to store raw data retrieved from the storage layer
- Created via the Snowflake UI or through SQL commands

### States
- States
  - STARTED
  - SUSPENDED
  - RESIZING
- By default when a virtual warehouse is created, it's in the STARTED state
- Suspending a virtual warehouse puts it in the SUSPENDED state, removing the compute nodes from a warehouse
- Resuming a virtual warehouse puts it back into the STARTED state and can execute queries
- Properties
  - AUTO SUSPEND
    - Specifies the number of seconds of inactivity after which a warehouse is automatically suspended
  - AUTO RESUME
    - Specifies whether to automatically resume a warehouse when a SQL statement is submitted to it
  - INITIALLY SUSPENDED
    - Specifies whether the warehouse is created initially in the SUSPENDED state

### Virtual Warehouse Sizes
- Can be created in 10 t-shirt sizes
- Underlying computer power approximately doubles with each size
- In general, the larger the virtual warehouse, the better the query performance
- Choosing a size is typically done by experimenting with a representative query of a workload
- Data loading does not typically require large virtual warehouses, and sizing up does not guarantee increased data loading performance

### Resource Monitors
- These are objects allowing users to set credit limits on user managed warehouses
- Can be set on either the account of individual warehouse level
- Limits can be set for a specified interval or data range
- When limits are reached, an action can be triggered, such as notify user or suspend warehouse
- Can only be created by account admins

### Multi-Cluster Warehouses
- Scaling up: resizing virtual warehouses
  - Intended to improve query performance
  - Virtual warehouses can be manually resized via the Snowflake UI or SQL commands
  - Resizing a running warehouse does not impact running queries. The additional compute resources are used for queued and new queries
  - Decreasing size of running warehouse removes compute resources from the warehouse and clears the warehouse cache
- Scaling out: multi-cluster warehouses
  - Named group of virtual warehouses which can automatically scale in and out based on the number of concurrent users/queries
  - MIN_CLUSTER_COUNT: specifies the min number of warehouses for a multi-cluster warehouse
  - MAX_CLUSTER_COUNT: specifies the max number of warehouses for a multi-cluster warehouse
  - Setting these two values the same will put the multi-cluster warehouse in MAXIMIZED mode
  - Setting these two values differently will put the multi-cluster warehouse in AUTO-SCALE mode
- Standard Scaling Policy
  - Standard
    - Minimizes queuing by scaling out
    - When a query is queued, a new warehouse will be added to the group immediately
    - Every minute a background process will check if the load on the least busy warehouse can be redistributed to another warehouse
    - If this condition is met after 2 consecutive minutes, a warehouse will be marked for shutdown
  - Economy
    - Conserving credits is the aim
    - When a query is queued, the system will estimate if there's enough query load to keep a new warehouse busy for 6 minutes
    - Every minute a background process will check if the load on the least busy warehouse can be redistributed to another warehouse
    - If this condition is met after 6 consecutive minutes, a warehouse will be marked for shutdown
- Billing
  - Total credit cost is the sum of all the individual running warehouses that make up that cluster
  - The max number of credits a multi-cluster can consume in the number of warehouses multiplied by the hourly credit rate of the size of the warehouses
  - Because multi-cluster warehouses scale in and out based on demand, it's typical to get some fraction of the max credit consumption
- Concurrency Behavior Properties
  - MAX CONCURRENCY LEVEL
    - Specifies the number of concurrent SQL statements that can be executed against a warehouse before either it's queued or additional compute power is provided
  - STATEMENT QUEUED TIMEOUT IN SECONDS
    - Specifies the time in seconds a SQL statement can be queued on a warehouse before it's absorbed
  - STATEMENT TIMEOUT IN SECONDS
    - Specifies the time in seconds after which any running SQL statements on a warehouse is absorbed