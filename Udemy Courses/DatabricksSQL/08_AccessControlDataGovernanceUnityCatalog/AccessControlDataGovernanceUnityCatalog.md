## 08_ Access Control, Data Governance, and Unity Catalog

### Administrative Roles in Databricks
- Account Administrator: manages the Databricks account
  - Create and delete metastores
  - MAnages account settings
  - Manages identities in the account
  - Delegate admin privileges
- Workspace Administrator: manages individual workspaces
  - Add/remove users from workspace
  - Assign workspace admin roles
  - Manages access to workspace objects
- Metastore Administrator: manages Unity Catalog metastores
  - Manages securable objects in a metastore, such as Catalogs, Schemas, and Tables
- Data Owner: manages data objects
  - Grant access and permission to objects
  - Transfer ownership of objects

### Workspace Object Access Control
- With workspace object access control, you can determine a user's ability to access and modify workspace objects, such as:
  - Folders
  - Queries
  - Alerts
  - Dashboards
  - SQL Warehouses

### SQL Warehouse Access Control
- [SQL warehouse access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#sql-warehouses)

### Folder Access Control
- [Folder access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#folders)

### Query Access Control
- [Query access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#query)
- Only the owner will retain "Can Manage" privilege when the Sharing Setting is "Run as owner". Other users with "Can Manage" will be downgraded to "Can Run"

### Dashboard Access Control
- [Dashboard access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#dashboards)

### Workspace Access Control
- [Workspace access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/)

### Unity Catalog Securable Objects and Privileges
- [Manage privileges with Unity Catalog](https://learn.microsoft.com/en-us/azure/databricks/data-governance/unity-catalog/manage-privileges/privileges)

### Granting and Revoking Privileges with SQL (Unity Catalog)
- [Clause: GRANT](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/security-grant)
- [Clause: REVOKE](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/security-revoke)

### Redacting Data with Dynamic Views (PII)
- [Function: is_account_group_member](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/is_account_group_member)
- Personally Identifiable Information (PII) is information that, when used alone or with other relevant data, can identify an individual

### Data Lineage
- Data Lineage is a feature of Unity Catalog
- Refers to the tracking and visualization of the flow of data throughout its lifecycle, from its source to its destination 
- Lineage is aggregated across all workspaces attached to a Unity Catalog metastore
- Users must have the correct permissions to view the lineage data
- Lineage data is retained for 30 days only

### Delta Sharing Overview
- [Delta sharing](https://learn.microsoft.com/en-us/azure/databricks/data-sharing/)
- Delta Sharing is an open protocol for secure data sharing with other organizations regardless of the computing platforms they use
- Databricks builds Delta Sharing into its Unity Catalog data governance platform, enabling a Databricks user, called a data provider, to share data with a person or group outside of their organization, called a data recipient
- A "Share" is a read-only collection of tables and table partitions to be shared with one or more recipients
- A "Recipient" is an object that associates an organization with a credential or secure sharing identifier that allows that organization to access one or more shares
- Type 1: Open Sharing
  - You can share data with users outside of your Databricks workspace
  - Recipients can access the shared data using many computing tools and platforms, including: Power BI, pandas, Apache Spark, Databricks
- Type 2: Databricks to Databricks Sharing
  - You can share data with other Databricks users who don't have access to your Unity Catalog metastore
  - The recipients need to have access to a Databricks workspace that is enabled for Unity Catalog
  - Can be to/from Databricks in Azure, AWS, or GCP