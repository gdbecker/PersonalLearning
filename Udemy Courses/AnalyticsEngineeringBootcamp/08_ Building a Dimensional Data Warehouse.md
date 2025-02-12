## 08_ Building a Dimensional Data Warehouse

### General steps
- Make sure you're on the latest version of Python installed locally, not on Anaconda
- Create a venv in the overall project folder on the same level as the dbt project folder
- Activate venv
- Install dbt and any specific data warehouse packages for the project
- Set up the connection between the dbt project and data warehouse you're using (like for BigQuery, make sure your Google credentials are automatically selected to use their APIs and access your warehouse)

### Commands
- Activate Python virtual env on Windows: "venv\Scripts\activate" (when you are in the same directory as the venv folder)
- Activate virtual env when you are accessing the venv from below: "..\venv\Scripts\activate"
- Deactivate Python virtual env on Windows: "deactivate"
- Make a requirements.txt file of Python packages: "pip freeze > requirements.txt"
- Run all dbt models: "dbt run"
- Run all dbt models and replace what was run before with new configurations in dbt_project.yml: "dbt run --full-refresh"
- Run specific dbt model path: "dbt run -m warehouse.dim_customer"
- To run tests: "dbt test"

### VS Code extensions
- vscode-dbt
- dbt formatter
- dbt shortcuts
- dbt-bigquery-preview
- Power User for dbt
- SQLTools

### dbt Power User
- https://docs.myaltimate.com/

### Other free SQL databases to use for future projects
- https://www.blueboxes.co.uk/6-sample-sql-databases-for-your-next-azure-project
- https://github.com/microsoft/sql-server-samples/blob/master/samples/databases/northwind-pubs/instpubs.sql
- https://github.com/microsoft/sql-server-samples/blob/master/samples/databases/adventure-works/oltp-install-script/instawdb.sql

### About the Use Case (Northwind Traders)
- The Northwind database is a sample database created by Microsoft to demonstrate the features of some of its products, and for training and tutorial purposes
- The database contains all the sales data for Northwind Traders, a fictitious specialty foods export-import company
  - Sales transactions between the company (Northwind Traders) and its consumers
  - The purchase transactions between Northwind and its suppliers
- We will be using MySQL version of the Northwind sample database
  - https://github.com/dalers/mywind

### Use Case
- What is is we are trying to do?
  - Northwind Traders are export-import company who trades specialty foods around the world
  - The existing architecture is mostly a mix of on-prem and legacy systems, including their MySQL database which is the primary operational database
  - This is where all the sales transactions are recorded between company and its customers
  - The same MySQL database is also being used to generate reports and build analytics solutions
  - They are struggling to keep up with the reporting requirements and this is causing the database to slow down, and that impacts their day to day business
  - Northwind Traders wants to modernize their data and reporting solutions, and move away from on-prem
- Why are we doing this?
  - They want to modernize their existing architecture for:
    - Better scalability
    - Reduce load on operational systems
    - Improved reporting speed
    - Improved data security
- How are we going to achieve it?
  - Northwind Traders will migrate their existing database system to Google Cloud Platform (GCP)
  - MySQL on-prem database will be replaced with a fully managed service, Cloud SQL
  - During this migration they need help with setting up the OLAP system for reports
  - BigQuery was selected to run OLAP
  - Need to build high priority reports first to access new system and drive adoption
  - Dimensional data warehouse will be built on BigQuery to support with reporting requirements

### Requirements Gathering
- Define business processes
  - Sales overview: Sales reports need to better understand their customers and what is being sold, what sells the most and what sells the least. The goal is to have a general overview of how the business is going
  - Sales Agent tracking: Track sales and performance of each sales agent to adjust commissions, reward high achiever and empower low achievers
  - Product inventory: Understand the current inventory levels and how to improve stock management, how much is purchased from each supplier. This will allow understanding of stock management and potentially broker better deals with suppliers
  - Customer reporting: Allow customers to better understand their purchase orders, how much and when they are buying, empowering them to make data-driven decisions and utilize the data to join to their sales data
- Conduct data profiling (data exploration)
  - Run queries, find out how tables are related, any data redundancies 
  - Usually the databases are directly connected to the data warehouse (not a data dump like we've done here)
  - Start by understanding the tables. Which ones do we need? Which ones do we not?
  - Check data types after selecting a table. Do they seem correct? If not, make a note to change later in the transformation step.
  - Check for nullable fields. Should they be nullable? Any that shouldn't (like a primary key column)?
  - Check table info, like total number of rows
  - Look for anything that looks weird in a table preview, like duplicate data values, null fields, etc
  - Write SQL queries to explore more, like checking to make sure that the number of unique primary key values matches the total number of rows
  - Repeat process for the tables needed for the dimensional model
  - Check the OLTP database table diagram (if it exists, shows the relationships between tables) to make sure you're getting the crucial tables and data needed
  - Data profiling is an iterative process
  - These are the tables we will need for this Northwind Traders project:
    - Customers: customers buy food from Northwind
    - Employees: works for Northwind
    - Orders: sales order transactions taking place between the customers and Northwind
    - Order Details: order details for the orders placed by customers
    - Inventory Transaction: transaction details of each inventory
    - Products: contains current Northwind products that customers can purchase
    - Shippers: ships orders from Northwind to customers
    - Suppliers: supply Northwind with required items
    - Invoices: invoice created for each order
- Create Bus Matrix high level entities
  - There is an Excel workbook with tabs for the bus matrix
- Create naming convention document
- Create conceptual model
  - You can use Draw.io to make a conceptual model diagram

### Dimensional Modelling
- 4 steps of dimensional modelling
  - Select the business process
  - Declare the grain
  - Identify the dimensions
  - Identify the facts
- Bus Matrix with the grain defined
- Create a logical model
- Source to target document

### Physical Design and Development
- Create physical model
- Source to Target Document
- Setup Data Warehouse (dbt)
  - Create data warehouse layers
  - Create data warehouse tables
  - Populate tables (via SQL)