-- Chapter 3 challenge function
-- Create a table named Sales.CustomerAccountAudit
-- Write a stored procedure that allows end users to search for customer orders by the CustomerID value
-- Return information from Sales.Customer
-- Return information from Sales.Orders
-- Add a new row to the Sales.CustomerAccountAudit to log activity

USE WideWorldImporters;
GO

-- Create an audit table for customer accounts
CREATE TABLE Sales.CustomerAccountAudit (
    AuditID INT IDENTITY PRIMARY KEY,
    CustomerID INT,
    ReviewDate datetime2
);
GO

-- View existing data
SELECT * FROM Sales.Customers;
SELECT * FROM Sales.Orders;
GO

-- Write a stored procedure to:
-- 1) view information from Sales.Customers
-- 2) view information from Sales.Orders
-- 3) write a row to Sales.CustomerAccountAudit to log activity

CREATE OR ALTER PROCEDURE Application.uspViewCustomerOrders (@CustomerID AS int)
AS
SELECT * FROM Sales.Customers WHERE Sales.Customers.CustomerID = @CustomerID;
SELECT * FROM Sales.Orders WHERE Sales.Orders.CustomerID = @CustomerID;
INSERT INTO Sales.CustomerAccountAudit (CustomerID, ReviewDate)
VALUES (
    @CustomerID, GETDATE()
);
GO

EXEC Application.uspViewCustomerOrders 832;

SELECT * 
FROM Sales.CustomerAccountAudit;
GO