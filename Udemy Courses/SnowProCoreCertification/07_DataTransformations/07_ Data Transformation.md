## 07_ Data Transformation

### Snowflake Functions
- Supported function types
  - Scalar
    - Returns one value per call; mostly used for returning one value per row
  - Aggregate
    - Operate on values across rows to perform mathematical calculations such as sum, average, and counting
  - Window
    - Subset of aggregate functions, allowing us to aggregate on a subset of rows used as input to a function
  - Table
    - Return a set of rows for each input row
    - Returned set can contain zero, one, or more rows
    - Each row can contain one or more columns
  - System
    - Provide a way to execute actions in the system
    - Provide info about the system
    - Provide info about queries

### Estimation Functions
- Cardinality Estimation
  - Number of distinct values
  - Snowflake has what's called HyperLogLog cardinality estimation algorithm, which returns an approximation of the distinct number of values of a column
    - HLL()
- Similarity Estimation
  - Similarity of two or more sets
  - Snowflake has two-step process to estimate similarity, without the need to compute the intersection or union of two sets
- Frequency Estimation
  - Frequency values in a set
  - Snowflake has a family of functions using the Space-Saving algorithm to produce an estimation of values and their frequencies
- Percentile Estimation
  - Percentile of values in a set
  - Snowflake has the t-Digest algorithm as an efficient way of estimating approximate percentile values in datasets

### Table Sampling
- Convenient way to read a random subset of rows from a table
  - Fraction-based
  - Row-based (default)
  - Block
  - Fixed-size

### Unstructured File Functions
- Snowflake has functions to handle these
- BUILD_SCOPED_FILE_URL
  - File URL expires
  - When this function is called in a UDF, Stored Procedure or View, the calling role does not require privileges on the underlying stage
- BUILD_STAGE_FILE_URL
  - File URL does not expire
  - Calling this function whether it's part of a query, UDF, Stored Procedure or View, requires privileges on the underlying stage; that is USAGE for external stages and READ for internal stages
- GET_PRESIGNED_URL

### Directory Tables
- Can work on internal and external stages
- Refreshing
  - These must be refreshed to reflect the most up to date changes made to stage contents
  - This includes new files uploaded, removed files, and changes to files in the path

### File Support REST API
- GET: /api/files
- Scoped URL
  - Authorization: only the user who generated the scoped URL can download the staged file
- File URL
  - Authorization: any role that has privileges on the underlying stage can access the file