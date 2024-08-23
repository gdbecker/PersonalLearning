## 04_ Extract, Transform and Load (ETL)

### SQL Server Integration Services
- A platform for building automated workflows
- Integrates data from a variety of sources
- Extract, transform, and load (ETL)
- Perform additional maintenance and admin tasks

### SQL Server Data Tools (SSDT)
- A component of Visual Studio
- Creates a package of tasks to perform
- Stores connections to data sources and the data warehouse
- Defines the sequences in which tasks will execute
- Uses a flowchart diagram to visualize the sequence

### Control Flow Diagram
- Steps
  - Connect to transactional database
  - Copy data to integration table
  - De-normalize relational data
  - Move data into warehouse
- Can be run every night

### Integration Services Service (SSIS Service)
- Installed as a shared component of SQL Server
- Runs in the background
- Stores packages and connections to data sources

### Data Flow
- Data source component
  - Defines where the data is located and how to access it
  - Can connect to a wide variety of data storage platforms: Excel, XML, CSV, Access, Oracle, SQL Server, and more
  - Can pull big data from Hadoop Distributed File System (HDFS)
  - Connection Manager stores path and login credentials
- Transforms component
  - Modify the data in successive steps
  - Lookup and Merge combines data from multiple tables
  - Conditional Split separates records based on a criteria
  - Derived Column uses functions to transform data
  - Aggregate transforms find the sum or average of a group
- Destination component
  - Similar to the data source
  - Stores network path and login credentials
  - Writes the records to the data warehouse
- If the transformations don't work, it can be sent to an error destination

### Control Flow Tasks
- Database maintenance: create backups, and rebuild indexes
- Create folders and files on the local file system or via FTP server
- Contact administrators via email
- Execute T-SQL commands on a database server
- Repeat tasks multiple times with a looping container 

### Precedence Constraint
- Success or failure emails can be sent depending on how the workflow goes

### Executing SSIS Package
- Packages are deployed to the SSISDB catalog
- SQL Server Agent is used to schedule package execution
- Recurring schedules ensure the data warehouse is updated consistently 