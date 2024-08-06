## 01_ Getting Started

### What is SQL Server?
- A relational database management system (RDBMS)
- Creates and administers database components such as tables
- Stores and retrieves data from a database
- Controls access by users with varying permissions
- Automates routine services such as creating data backups
- Monitors and applies performance optimizations

### SQL Server Installations
- Runs in the background and listens for communication requests from end users
- typically installed on dedicated hardware
- Can be installed on a local computer, in the cloud, or in a container

### SQL Server Instances
- A single installation of SQL Server is called an Instance
- A SQL Server instance can house many individual databases and manage their users and security
- Several instances can be installed simultaneously if you want to work with different versions of SQL Server from the same machine
- Each instance will have a unique name on the server machine

### Structured Query Language
- Structured Query Language puts the SQL in SQL Server
- Language used to interact with a database
- SQL Server uses a version called Transact-SQL (T-SQL)
- T-SQL is used to filter, sort, combine, add, update, and retrieve records from a database
- T-SQL is also used to run admin commands on the system or to create new database objects

### Interfacing with SQL Server
- Out of the box, SQL Server is a command-line system
- The command line is powerful, but not user friendly
- SQL Server Management Studio (SSMS) adds a GUI for Windows users
- Linux and MacOS can install Azure Data Studio as an alternate GUI

### Software to Install
- SQL Server: back-end database management services
- Management Studio: front-end GUI

### SQL Server Editions (paid)
- Enterprise 
  - Unlimited CPU cores and memory utilization
- Standard
  - Limited to 24 CPU cores and 128 GB of memory

### SQL Server Editions (free)
- Express
  - Up to 16 CPU cores and 64 GB of memory
  - Some advanced features are not available
- Developer
  - Unlimited free edition for development and testing
  - Only for educational purposes or for testing your own apps
  - Can't use this one to actually run your business and make money

### Docker
- Allows users to compartmentalize apps
- Create, duplicate, backup, and restore your server easily
- Docker files exist as a single file, containing everything the SQL Server instance needs to operate
- A cross-platform solution
