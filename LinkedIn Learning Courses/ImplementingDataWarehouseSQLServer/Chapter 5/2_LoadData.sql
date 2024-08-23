-- Create a master key
CREATE MASTER KEY;


-- Create the data source
CREATE EXTERNAL DATA SOURCE WWIStorage
WITH
(
    TYPE = Hadoop,
    LOCATION = 'wasbs://wideworldimporters@sqldwholdata.blob.core.windows.net'
);


-- Define the format of the external data file
CREATE EXTERNAL FILE FORMAT TextFileFormat
WITH
(
    FORMAT_TYPE = DELIMITEDTEXT,
    FORMAT_OPTIONS
    (
        FIELD_TERMINATOR = '|',
        USE_TYPE_DEFAULT = FALSE
    )
);


-- Create an external table that references the data stored in blob storage
CREATE EXTERNAL TABLE dbo.ExternalCity(
    [City Key] [int] NOT NULL,
    [WWI City ID] [int] NOT NULL,
    [City] [nvarchar](50) NOT NULL,
    [State Province] [nvarchar](50) NOT NULL,
    [Country] [nvarchar](60) NOT NULL,
    [Continent] [nvarchar](30) NOT NULL,
    [Sales Territory] [nvarchar](50) NOT NULL,
    [Region] [nvarchar](30) NOT NULL,
    [Subregion] [nvarchar](30) NOT NULL,
    [Location] [nvarchar](76) NULL,
    [Latest Recorded Population] [bigint] NOT NULL,
    [Valid From] [datetime2](7) NOT NULL,
    [Valid To] [datetime2](7) NOT NULL,
    [Lineage Key] [int] NOT NULL
)
WITH (LOCATION='/v1/dimension_City/',
    DATA_SOURCE = WWIStorage,  
    FILE_FORMAT = TextFileFormat,
    REJECT_TYPE = VALUE,
    REJECT_VALUE = 0
);


-- Load the data into the data warehouse by copying it from the external table
CREATE TABLE dbo.DimCity
WITH
(
    DISTRIBUTION = REPLICATE,
    CLUSTERED COLUMNSTORE INDEX
)
AS
SELECT * FROM dbo.ExternalCity
OPTION (LABEL = 'CTAS : Load dbo.DimCity')
;


-- View the loaded data
SELECT * FROM dbo.DimCity