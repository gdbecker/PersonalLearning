-- Create a SQL Server authentication login in the master database

IF NOT EXISTS (SELECT * FROM sys.sql_logins WHERE name = 'DataLoader')
BEGIN
CREATE LOGIN DataLoader WITH PASSWORD='MyStrongPassword1'
END
;


-- Create the database user and link to the new login on the data warehouse database

IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'DataLoader')
BEGIN
CREATE USER DataLoader FOR LOGIN DataLoader
GRANT CONTROL ON DATABASE::DataWarehouseName TO DataLoader   -- Supply your unique data warehouse name on this line
END
;