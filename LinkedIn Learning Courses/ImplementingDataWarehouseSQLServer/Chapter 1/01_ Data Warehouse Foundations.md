## 01_ Data Warehouse Foundations

### Business Intelligence System
- Data extracted, transformed and loaded from sources into data warehouses
- From the DW, analysis and reporting are formed

### Data Warehouse Concepts
- Store data over a long period of time
- Aggregate and format data for analysis and reporting
- Use the same relational structures as other databases
- Are populated solely through extract, transform, and load (ETL)
- ETL processes occur on a regular schedule

### Benefits of a Data Warehouse
- Relieves resource pressure from operational databases
- Prevents record locks from occurring during analysis
- Single point of contact for all analysis and reporting
- Allows tuning for query analysis requirements
- Maintains historical records

### OLTP vs OLAP
- OLTP
  - Transaction processing
  - Normalizes data to reduce redundancy and blocking errors
  - Prioritizes writing and modifying data quickly, securely, and consistently
- OLAP
  - Analytical processing
  - Stores redundant values and pre-computed calculation results
  - Prioritizes performing queries and answering questions quickly

### Online Transaction Processing (OLTP)
- Typical operational databases are OLTP
- Efficiently add and modify records or perform transactions
- Follow a normalized relational model database design

### Normalized Databases
- Tables connected via primary keys to foreign keys
- Minimizes amount of data needed to be written to the db per update
- Maintains consistencies

### Online Analytical Processing (OLAP)
- Databases created to facilitate efficient analysis
- Data warehouses are OLAP databases
- Need to accommodate far fewer transactions
- Data is loaded in scheduled batches, typically overnight
- Data is de-normalized and restructured

### De-normalization
- Duplicate values are stored in data warehouse tables
- Calculated results and aggregate values are pre-computed and also stored

### Monthly Sales Totals per Region?
- How would you answer this question?
  - Identify every transaction for the month
  - Group the location of each transaction into sales regions
  - Add up each transaction to get the monthly total per region

### Dimensions and Facts

### Fact Table
- Record a single measurement of a real-world observation
- Almost always numeric
- Typically involve money or financial transactions
- Atomic facts record a single value
- Snapshot or aggregate facts record summary information

### Dimension Table
- Store the descriptive information about the fact
- Used for filtering, grouping, and sorting
- Time and location are common dimensions
- Often store formatting variations of the dimension

### Dimensional Model
- Fact and dimension tables form a dimensional model
- Easy for end users to understand and incorporate in analysis
- Fast data structure for the query engine to navigate
- ETL transforms relational model into dimensional model

### Staging Tables
- Staging, or integration, tables hold temporary data for ETL
- Used to copy source data as is during extract process
- Transform steps are then performed on the local copy
- Staging tables emptied during the data warehouse load
- Particularly useful when source data is not in a database

### Star and Snowflake

### Star Design
- Fact tables in the middle, and dimensions are arrayed outward like a star
- 1 to many relationships
- Require single joins

### Snowflake Design
- Avoid if possible
- Requires multiple joins
- Dimensions can branch off to other dimension tables

### Hardware

### Sizing a Data Warehouse Server
- Memory
  - If possible, try to fit the entire data warehouse in system memory
  - At a minimum, all frequently access indexes should fit in memory
- Disk drives
  - Drive reliability is not as much a concern in data warehouses
  - Prioritize locally attached, high-performance drives
- Processor
  - More cores is better than faster cores
  - Data warehouse calculations are not complex, but there are a lot of them
- Network I/O
  - Internal internet speeds are not usually a performance concern
  - Internet bandwidth might be maxed out during ETL