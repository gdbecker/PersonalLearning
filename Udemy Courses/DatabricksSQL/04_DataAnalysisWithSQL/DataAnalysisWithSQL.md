## 04_ Data Analysis with SQL

### SELECT Statement Recap
- The back tick `(``)` is not the same as the apostrophe or single quote `(')`

### Note on JC_BIKE_DATA_22
- This table is intended to store data for the entirety of 2022
- This table is missing data for one month
- This is intentional for an upcoming lecture in the "Charts and Dashboards"

### Filtering Records with the WHERE Clause
- [Clause: WHERE](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-qry-select-where)

### Filtering Records Based on Multiple Conditions
- [Operator: OR](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/or)
- [Operator: AND](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/and)
- [Operator: NOT](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/not)
- [Operator: BETWEEN](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/between)

### Filtering Records with the IN and LIKE Operators
- [Operator: IN](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/in)
- [Operator: LIKE](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/like)

### Deleting Records
- [Clause: DELETE FROM](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/delta-delete-from)

### Databricks SQL Built-In Functions Overview
- [Databricks SQL built-in functions](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-functions-builtin)

### String Functions
- [String Functions](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-functions-builtin#string-and-binary-functions)

### Numerical Functions
- [Numerical Functions](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-functions-builtin#numeric-scalar-functions)
- The ROUND function returns the rounded expression to the specified number of digits. Syntax: round(expr, num)
- The ABS function returns the absolute value of the numeric value. Syntax: abs(expr)

### Date and Timestamp Functions
- [Date and Timestamp Functions](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-functions-builtin#date-timestamp-and-interval-functions)
- [Datetime Patterns](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-datetime-pattern)

### Converting Strings to Dates/Timestamps
- [Conversion functions](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-functions-builtin#cast-functions-and-constructors)
- [Function: to_date](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/to_date)
- [Function: to_timestamp](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/to_timestamp)
- [Datetime Patterns](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-datetime-pattern)

### Conditional Functions
- [Function: if](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/if)
- [Expression: case](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/case)

### Aggregate Functions
- [Aggregate functions](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-functions-builtin#aggregate-functions)

### Filtering Aggregated Tables
- [Clause: HAVING](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-qry-select-having)

### Joining Tables
- [Clause: JOIN](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-qry-select-join)
- Joins are used to combine data from two or more tables based on a related column between them
- Joins are essential for querying and retrieving data from multiple tables
- Inner Join = returns only matching records from both tables
- Left Join = Returns all records from the left table and only matching records from the right table
- Right Join = Returns all records from the right table and only matching records from the left table
- Full Outer Join = Returns all records from both tables with NULLs for missing values
- Use table aliases as needed to keep these join statements cleaner and more simplified

### Order by and Limit
- [Clause: ORDER BY](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-qry-select-orderby)
- [Clause: LIMIT](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-qry-select-limit)

### Subqueries
- [Subqueries](https://learn.microsoft.com/en-us/sql/relational-databases/performance/subqueries?view=sql-server-ver16)

### Views
- [Clause: CREATE VIEW](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-ddl-create-view)
- Use cases/benefits of views
  - Simplifying complex queries
  - Enhancing data security
  - Data privacy and compliance
  - Performance optimizations
  - Consolidating data

### Set Operators
- [Set operators](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/sql-ref-syntax-qry-select-setops)

