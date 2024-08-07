## 03_ Creating Databases

### Commands
- Start SQL Server in the command line: "sqlcmd"
- Check SQL Server command line version: "sqlcmd --version"
- Run the local database server on your machine: "SQLLocalDB.exe start MSSQLLocalDB"
- Stop the local database server on your machine: "SQLLocalDB.exe stop"
- Delete the local database server on your machine: "SQLLocalDB.exe delete"
- Create a new local database server on your machine: "SQLLocalDB.exe create"

### Database options setup
- Collation: controlling sorting options
- Recovery model: how backups are made
- Compatibility level: version of SQL Server to be able to work with
- Containment type: none = require that SQL Server manages all options

### Data Tables
- Creating tables
  - Defining columns to contain the data
  - One column for each attribute
  - Create attributes into the smallest components possible
- Defining columns
  - Name of the column
    - Make it clear what information it will store
    - Avoid spaces and special characters
    - Be consistent with capitalization
      - UPPERCASE
      - lowercase
      - camelCase
      - PascalCase
  - Data type
    - Text, numbers, dates,o or something else?
    - How many characters, or what range?
    - Think about your data storage needs and be deliberate in your choice of data type
  - Allow nulls
    - Nulls are blank values in a record
    - If a value is required in the column, don't allow nulls
    - If supplying a value is optional, allow nulls

### Sample Database from Microsoft
- Wide World Importers sample database v1.0
  - https://github.com/Microsoft/sql-server-samples/releases/tag/wide-world-importers-v1.0
  - Get the WideWorldImporters-Full.bak file
  - Move the file to your hard drive
- Import using these instructions: https://stackoverflow.com/questions/1535914/import-bak-file-to-a-database-in-sql-server
  - Right click Databases on left pane (Object Explorer)
  - Click Restore Database...
  - Choose Device, click ..., and add your .bak file
  - Click OK, then OK again
