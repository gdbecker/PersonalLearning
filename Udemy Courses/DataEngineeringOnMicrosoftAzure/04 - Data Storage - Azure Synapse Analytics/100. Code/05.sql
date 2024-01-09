-- Lab - Loading data into a table - COPY Command - Parquet

DROP TABLE [logdata]

-- Recreate the table
-- Here again I am using the data type with MAX because that is how I generated the parquet files when it came to the data type
-- Here we need to specify the clustered index based on a column , because indexes can't be created on varchar(MAX)

CREATE TABLE [logdata]
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

-- Grant the permissions again. Because when you drop the table, you also drop the associated permission

GRANT INSERT ON logdata TO user_load;
GRANT SELECT ON logdata TO user_load;

COPY INTO [logdata] FROM 'https://datalake3003.blob.core.windows.net/data/raw/parquet/*.parquet'
WITH
(
FILE_TYPE='PARQUET',
CREDENTIAL=(IDENTITY= 'Shared Access Signature', SECRET='?sv=2021-06-08&ss=b&srt=sco&sp=rl&se=2023-01-11T00:00:43Z&st=2023-01-10T16:00:43Z&spr=https&sig=9vdDVU%2Bqyq%2Fd77aiF51nwadseQff0rWV7lJntnntULQ%3D')
)

SELECT * FROM [logdata]