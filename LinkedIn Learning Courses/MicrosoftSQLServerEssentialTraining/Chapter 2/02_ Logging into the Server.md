## 02_ Logging into the Server

### User Permissions and Authentication
- User accounts
  - Real people and computer apps are all considered users
  - Users need to authenticate with an approved login
- Authentication
  - Windows Authentication uses your system login
  - SQL Server Authentication stores usernames and passwords in the database server

### User Roles
- System Administrator
  - Has full access to configure the server environment
  - Maintains physical hardware
  - Manages top-level user accounts
- Database Administrator
  - Creates and maintains tables of data
  - Performs database backups
  - Manages database-level user accounts
- Database User
  - Creates and analyzes data
  - Limited to tasks limited by the admins
  - Can be granted read-only or write-only access to specific data tables