## 08_ Accessing Data from Azure Data Lake Storage (ADLS) with Databricks

### Accessing Data in different ways
- [Connect to Azure Data Lake Storage Gen2 and Blob Storage](https://learn.microsoft.com/en-us/azure/databricks/connect/storage/azure-storage#--access-azure-data-lake-storage-gen2-or-blob-storage-using-the-account-key)
- [Use the Azure Data Lake Storage URI](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri)

### Mounting ADLS to DBFS
- [Mounting cloud object storage on Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/dbfs/mounts)
- Register an Azure AD application to create a service principal
  - You get an Application Client ID, Application Tenant ID, and Client Secret
- Give the service principal "contributor" access to ADLS
- Mount ADLS to DBFS using the IDs and secret

### Secret Scopes
- [Secret scopes](https://docs.azure.cn/en-us/databricks/security/secrets/secret-scopes)
- [Secret management](https://learn.microsoft.com/en-us/azure/databricks/security/secrets/)

