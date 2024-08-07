## 07_ Backup and Restore

### Business Continuity
- Make sure the server and the databases they contain are highly available
- Availability Groups
  - Multiple server machines work together in a cluster
  - Primary database copies transactions to secondary replicas
  - During a failure, a replica can assume primary status
  - Failover process relies on a feature of the host OS:
    - Windows Server failover clusters
    - Linux Pacemaker clusters
  - Little to no downtime experienced by database users
  - Replicas can be used for read-only tasks
  - Require multiple servers with identical configurations
- Log Shipping
  - Slower than availability groups
  - Doesn't require a failover cluster but does require multiple servers
  - Uses the same backup procedure you're already using
  - Transaction log backups are restored on the warm standby
  - A delay is built into the process
  - It's possible to identify problems before they propagate
  - Saves time during the restore process
  - Some data loss may occur

### Link for Azure SQL Managed Instance
- Azure SQL Managed Instance is a platform as a service (PaaS) that supports SQL Server databases
- The Link feature connects your on-premises SQL Server databases with a duplicate on a Managed Instance in the cloud
- Each database gets its own link, and you can start and stop the link whenever you need
- When databases are linked, changes to the primary database are replicated to the cloud in near real-time
- Benefits of the Linking Databases
  - A wizard in Management Studio will help set up the connections and initial database replication
  - Linked databases in Managed Instance can be used for read-only activities, such as reporting or analysis tasks
  - Replicated database acts as a live backup server, and can support business activities during an outage until your primary servers are available
  - Replicated databases can be kept going geographically remote
- The link feature is still in closed beta (as of 2022). Upon general release, the feature will make it much easier to leverage hybrid infrastructures 