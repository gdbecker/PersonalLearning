## 04_ Data Analysis and Transformation with SparkSQL

### Selecting and Renaming Columns
- [select](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.select.html?highlight=select#pyspark.sql.DataFrame.select)
- [col](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.col.html?highlight=col#pyspark.sql.functions.col)
- [alias](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.Column.alias.html?highlight=alias#pyspark.sql.Column.alias)
- [withColumnRenamed](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.withColumnRenamed.html?highlight=withcolumnrenamed#pyspark.sql.DataFrame.withColumnRenamed)

### Adding New Columns
- [withColumn](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.withColumn.html)
- [current_date](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.current_date.html)
- [lit](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.lit.html)

### Changing Data Types
- [Data types in Spark](https://spark.apache.org/docs/latest/sql-ref-datatypes.html)
- [cast](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.Column.cast.html?highlight=cast#pyspark.sql.Column.cast)

### Math Functions and Simple Arithmetic
- [Math functions](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/functions.html#math-functions)

### Sort Functions
- [Sort functions](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/functions.html#sort-functions)

### String Functions
- [String Functions](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/functions.html#string-functions)

### Datetime Functions
- [Datetime functions](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/functions.html#datetime-functions)
- [Datetime Patterns](https://spark.apache.org/docs/latest/sql-ref-datetime-pattern.html)

### Filtering DataFrames
- [filter](https://spark.apache.org/docs/latest/api/python/reference/pyspark.pandas/api/pyspark.pandas.DataFrame.filter.html?highlight=filter#pyspark.pandas.DataFrame.filter)
- [Operators for conditional statements](https://sparkbyexamples.com/spark/spark-and-or-not-operators/)

### Conditional Statements
- [when](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.Column.when.html?highlight=when#pyspark.sql.Column.when)
- The CASE statement in SQL goes through conditions and returns a value when the first condition is met

### Using SQL Expressions with expr()
- [expr](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.expr.html?highlight=expr#pyspark.sql.functions.expr)
- `expr()` lets you execute SQL-like expressions and use a DataFrame column value as an expression argument to Pyspark built-in functions

### Removing Columns
- [select](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.select.html?highlight=select#pyspark.sql.DataFrame.select)
- [drop](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.drop.html?highlight=drop#pyspark.sql.DataFrame.drop)

### Grouping your DataFrame
- [Grouping](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/grouping.html)
- [Aggregate functions](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/functions.html#aggregate-functions)

### Pivot Your DataFrame
- [pivot](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.GroupedData.pivot.html?highlight=pivot#pyspark.sql.GroupedData.pivot)

### Joining DataFrames
- [join](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.join.html?highlight=join#pyspark.sql.DataFrame.join)
- Joins are used to combine data from two or more tables based on a related column between them
- Joins are essential for querying and retrieving data from multiple tables
- Inner Join = returns only matching records from both tables
- Left Join = Returns all records from the left table and only matching records from the right table
- Right Join = Returns all records from the right table and only matching records from the left table
- Full Outer Join = Returns all records from both tables with NULLs for missing values
- Use table aliases as needed to keep these join statements cleaner and more simplified

### Union
- [union](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.union.html?highlight=union#pyspark.sql.DataFrame.union)

### Unpivotting Your DataFrame
- [SQL stack function for Databricks](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/stack)
  - First argument: number of columns you want to unpivot
  - Then go column by column: original name of the column, then the name you want to assign that column when in rows (usually the same thing)

### Using Pandas in Databricks
- [Pandas API on Spark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.pandas/index.html)