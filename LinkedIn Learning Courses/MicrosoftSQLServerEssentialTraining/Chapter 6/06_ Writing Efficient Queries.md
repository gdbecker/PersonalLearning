## 06_ Writing Efficient Queries

### Indexes
- Without an index, SQL Server performs a table scan by reading every record from top to bottom
- Indexes allow efficient table seeks
- Creating indexes
  - CREATE INDEX or add primary key to the table
  - Primary key column typically creates a clustered index
  - Clustered index defines the physical order of records
  - Secondary indexes can be added to any other columns
  - Non-clustered indexes point to a clustered index location
- Maintaining indexes
  - Index cost computational resources to maintain
  - They need to be updated every time there's a table change
  - Indexing makes queries faster but makes table writes and edits slower

### Stored Procedures
- Benefits
  - Consistency
    - Ensure that processes are the same, every time they are executed
    - Updates occur in a single location
  - Security
    - Hides internal database structure from end-user view
    - User- and schema-level security permissions apply to stored procedures
  - Performance
    - A single call to the database executes many lines of code
- Naming considerations
  - SQL Server uses "sp_" for system-level stored procedures
  - Prefix names in a consistent way, such as "usp" or "p"
  - Always use a two-part Schema.Procedure name
  - Use two-part Schema.TableName references within your stored procedure code