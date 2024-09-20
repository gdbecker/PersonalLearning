## 06_ Data Loading and Unloading

### Stages
- Crucial step in data movement process
- Temporary storage locations for data files used in the data loading and unloading process
- Internal types
  - User stage
    - Automatically allocated when a user is created
    - Cannot be altered or dropped
    - Not appropriate if multiple users need access to stage
  - Table stage
    - Automatically allocated when a table is created
    - Cannot be altered or dropped
    - User must have ownership privileges on table
  - Named stage
    - User created database object
    - Securable object
- External type
  - Named stage
    - User created database object
    - Storage location can be private or public
    - Copy options such as ON_ERROR and PURGE can be set on stages
  - External stages reference data files stored in a location outside of Snowflake
  - A storage integration is a reusable and securable Snowflake object which can be applied across stages and is recommended to avoid having to explicitly set sensitive info for each stage definition
- Stage helper commands
  - LIST
    - Get the contents of a stage
      - Path of staged file
      - Size of staged file
      - MDS hash of staged file
      - Last updated timestamp
    - Can optionally specify path for specific folders or files
    - Named and internal table stages can optionally include database and schema global pointer
  - SELECT
    - Query the contents of staged files directly using standard SQL for both internal and external stages
    - Useful for inspected files prior to data loading/unloading
    - Reference metadata columns such as filename and row numbers for a staged file
  - REMOVE
    - Remove files from either an external or internal stage
    - Can optionally specify a path for specific folders or files
    - Named and internal table stages can optionally include database and schema global pointer
- PUT command
  - Uploads data files from a local directory on a client machine to any of the three types of internal stage
- Cannot be executed from within worksheets
- Duplicate files uploaded to a stage via PUT are ignored
- Uploaded files are automatically encrypted with a 128-bit key with optional support for a 256-bit key

### Bulk Loading: COPY INTO TABLE command
- Copies the contents of an internal or external stage or external location directly into a table
- The following file formats can be uploaded to Snowflake:
  - CSV, TSV
  - JSON
  - Arvo
  - ORC
  - Parquet
  - XML
- Requires a user created virtual warehouse to execute
- Load history is stored in the metadata of the target table for 64 days, which ensures files are not loaded twice
- Load transformations
  - Snowflake allows users to perform transformations on data as it's loaded into a table
  - Allowed the user to perform:
    - Column re-ordering
    - Column omission
    - Casting
    - Truncate text string that exceed target length
  - Users can specify a set of fields to load from the staged data files using a standard SQL query
  - The number of columns in the select query must match the number of columns in the target table
- External stage/location
  - Files can be loaded from external stages in the same way as internal stages
  - Data transfer billing charges may apply when loading data from files in a cloud storage service in a different region or cloud platform from your Snowflake account
  - Files can be copied directly from a cloud storage service location
  - Snowflake recommends encapsulating cloud storage service in an external stage
- Copy options
  - ON_ERROR
  - SIZE_LIMIT
  - PURGE
  - RETURN_FAILED_ONLY
  - MATCH_BY_COLUMN_NAME
  - ENFORCE_LENGTH
  - TRUNCATECOLUMNS
  - FORCE
  - LOAD_UNCERTAIN_FILES
- Validation
  - VALIDATION_MODE
    - Optional parameter allows you to perform a dry-run of load process to expose errors
    - RETURN_N_ROWS
    - RETURN_ERRORS
    - RETURN_ALL_ERRORS
  - VALIDATE
    - Table function to view all errors encountered during a previous COPY INTO execution
    - Validate accepts a job id of a previous query or the last load operation executed

### File Formats
- File format options can be set on a named stage or COPY INTO statement
- Explicitly declared file format options can all be rolled up into independent file format Snowflake objects
- File formats can be applied to both named stages and COPY INTO statements. If set on both COPY INTO will take precedence
- In the file format object, the file format you're expecting to load is set via the 'type' property with one of the following values: CSV, JSON, AVRO, ORC, PARQUET, or XML
- Each 'type' has its own set of properties related to parsing that specific file format
- If a file format object or options are not provided to either the stage or COPY statement, the default behavior will be to try and interpret the contents of a stage as a CSV with UTF-8 encoding

### Snowpipe
- Continuous data ingestion service
- There are two methods for detecting when a new file has been uploaded to a stage:
  - Automating Snowpipe using cloud messaging (external stages only)
  - Calling Snowpipe REST endpoints (internal and external stages)
- The Pipe object defines a COPY INTO <table> statement that will execute in response to a file being uploaded to a stage
- It's designed to load new data typically within a minute after a file notification is sent
- Snowpipe is a serverless feature, using Snowflake managed compute resources to load data files not a user managed virtual warehouse
- Snowpipe load history is stored in the metadata of the pipe for 14 days, used to prevent reloading the same files in a table
- When a pipe is paused, event messages received for the pipe enter a limited retention period. The period is 14 days by default

| Feature | Bulk Loading | Snowpipe |
|--|--|--|
| Authentication | Relies on the security options supported by the client for authenticating and initiating a user session | When calling the REST endpoints: Requires key pair authentication with JSON Web Token (JWT). JWTs are signed using a public/private key pair with RSA encryption |
| Load History | Stored in the metadata of the target table for 64 days | Stored in the metadata of the pipe for 14 days |
| Compute Resources | Requires a user-specified warehouse to execute COPY statements | Uses Snowflake-supplied compute resources |
| Billing | Billed for the amount of time each virtual warehouse is active | Snowflake tracks the resource consumption of loads for all pipes in an account, with per-second/per-core granularity, as Snowpipe actively queues and processes data files. In addition to resource consumption, an overhead is included in the utilization costs charged for Snowpipe: 0.06 credits per 1000 files notified or listed via event notifications or REST API calls |

- Data loading best practices
  - 100-250 MB compressed
  - Organize data by path
  - Separate warehouses for loading and querying
  - Pre-sort data
  - Load once per minute

### Data Unloading
- Table data can be unloaded to a stage via the COPY INTO <location> command
- The GET command is used to download staged file to the local file system
- By default, results unloaded to a stage using COPY INTO <location> command are split into multiple files
- All data files unloaded to internal stages are automatically encrypted using 128-bit keys
- Options
  - OVERWRITE
  - SINGLE
  - MAX_FILE_SIZE
  - INCLUDE_QUERY_ID
- GET command
  - Reverse of PUT. Allows users to specify a source stage and a target local directory to download files to
  - Cannot be used for external stages
  - Cannot be executed from within worksheets
  - Download files are automatically decrypted
  - Parallel optional parameter specifies the number of threads to use for downloading files. Increasing this number can improve parallelization with downloading large files
  - Pattern optional parameter specifies a regular expression pattern for filtering files to download

### Semi-Structured
- JSON, XML typical formats
- Data types
  - ARRAY
    - Contains 0 or more elements of data. Each element is accessed by its position in the array
  - OBJECT
    - Represent collection of key-value pairs
  - VARIANT
    - Universal semi-structured data type used to represent arbitrary data structures
    - Can hold up to 16MB compressed data per row
- Data formats that Snowflake supports
  - JSON
  - AVRO
  - ORC
  - PARQUET
  - XML

### Loading and Unloading Semi-Structured Data
- JSON file format options
  - DATE_FORMAT
  - TIME FORMAT
  - COMPRESSION
  - ALLOW DUPLICATE
  - STRIP OUTER ARRAY
  - STRIP NULL VALUES
- Loading approaches
  - ELT
  - ETL
  - Automatic schema detection

### Accessing Semi-Structured Data
- Dot notation
- Bracket notation
- Repeating element
- Casting semi-structured data
  - Double colon notation
  - TO_<datatype>() function
  - AS_<datatype>() function

### Semi-Structured Functions
- FLATTEN
  - Table function that accepts compound values (VARIANT, OBJECT, ARRAY) and produces a row for each item
  - Path: specify a path inside object to flatten
  - Recursive: flatting is performed for all sub-elements recursively
  - Output: 6 columns
    - SEQ, KEY, PATH, INDEX, VALUE, THIS
- LITERAL FLATTEN