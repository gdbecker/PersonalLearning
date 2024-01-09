-- Lab - SQL Pool - External Tables - CSV

CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'P@ssw0rd@123';

-- Here we are using the Storage account key for authorization

CREATE DATABASE SCOPED CREDENTIAL AzureStorageCredential
WITH
  IDENTITY = 'datalake3003',
  SECRET = 'yhkNfQk5GwHnhviABkmQg+aSdpApKct4vxUHBQiNy4TXm2wK6fJyRuyGK/1bJYfP3h35jqYAqrdT+ASthxU1rg==';

-- In the SQL pool, we can use Hadoop drivers to mention the source

CREATE EXTERNAL DATA SOURCE log_data
WITH (    LOCATION   = 'abfss://data@datalake3003.dfs.core.windows.net',
          CREDENTIAL = AzureStorageCredential,
          TYPE = HADOOP
)

CREATE EXTERNAL FILE FORMAT TextFileFormat WITH (  
      FORMAT_TYPE = DELIMITEDTEXT,  
    FORMAT_OPTIONS (  
        FIELD_TERMINATOR = ',',
        FIRST_ROW = 2))

DROP EXTERNAL TABLE [logdata]

CREATE EXTERNAL TABLE [logdata]
(
    [Id] [int] NULL,
	[Correlationid] [varchar](200) NULL,
	[Operationname] [varchar](200) NULL,
	[Status] [varchar](100) NULL,
	[Eventcategory] [varchar](100) NULL,
	[Level] [varchar](100) NULL,
	[Time] [datetime] NULL,
	[Subscription] [varchar](200) NULL,
	[Eventinitiatedby] [varchar](1000) NULL,
	[Resourcetype] [varchar](1000) NULL,
	[Resourcegroup] [varchar](1000) NULL
)
WITH (
 LOCATION = '/cleaned/Log.csv',
    DATA_SOURCE = log_data,  
    FILE_FORMAT = TextFileFormat
)

/*
See LOCATION above -> using the "cleaned" folder instead for new Log.csv data, not in "raw" folder
*/


SELECT * FROM logdata


SELECT [Operation name] , COUNT([Operation name]) as [Operation Count]
FROM logdata
GROUP BY [Operation name]
ORDER BY [Operation Count]