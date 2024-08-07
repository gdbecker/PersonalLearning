-- Chapter 4 challenge
-- Combine knowledge of stored procedures and transactions
-- Part 1 for this challenge, finish in the next chapter
-- Goal: write a stored procedure to transfer money from one account to another
-- Include input parameters for the stored procedure
-- Place commands inside of a transaction
-- Test the procedure by transferring $50 from account 1 to account 3

-- Set up the challenge table and populate rows
DROP TABLE IF EXISTS dbo.BankAccounts;
CREATE TABLE dbo.BankAccounts (
    AccountID INT PRIMARY KEY,
    Balance decimal(10,2)
);
GO

INSERT INTO dbo.BankAccounts
    VALUES (1, 100.00), (2, 200.00), (3, 300.00);
GO

SELECT * FROM dbo.BankAccounts;
GO

-- Create a stored procedure that contains a transaction for transferring funds
-- Then use the stored procedure to transfer 50.00 from Account 1 to Account 3.

CREATE OR ALTER PROCEDURE dbo.uspTransferMoney (@Amount AS DECIMAL(10,2), @From AS INT, @To AS INT)
AS
	SET XACT_ABORT ON;
	BEGIN TRANSACTION;
	UPDATE dbo.BankAccounts SET Balance = Balance - @Amount WHERE AccountID = @From;
	UPDATE dbo.BankAccounts SET Balance = Balance + @Amount WHERE AccountID = @To;
	COMMIT TRANSACTION;
	SET XACT_ABORT OFF;
;
GO

EXEC dbo.uspTransferMoney 50, 1, 3;
GO

SELECT *
FROM dbo.BankAccounts;
GO