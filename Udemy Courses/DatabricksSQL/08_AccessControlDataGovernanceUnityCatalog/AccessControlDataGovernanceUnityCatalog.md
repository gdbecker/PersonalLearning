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

### SQL Warehouse Access Control
- [SQL warehouse access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#sql-warehouses)

### Folder Access Control
- [Folder access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#folders)

### Query Access Control
- [Query access control](https://learn.microsoft.com/en-us/azure/databricks/security/auth/access-control/#query)

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

### Delta Sharing Overview
- [Delta sharing](https://learn.microsoft.com/en-us/azure/databricks/data-sharing/)