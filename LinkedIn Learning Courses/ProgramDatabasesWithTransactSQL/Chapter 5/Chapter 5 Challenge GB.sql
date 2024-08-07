-- Chapter 5 challenge
-- Continue from chapter 4's challenge
-- Add error handling to the procedure
-- Goal: ensure the "from account" has enough funds for the transfer
-- Goal: Ensure the "from account" and "to account" actually exist
-- Goal: Complete the transfer only after all three conditions are met

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

	DECLARE @FromAmount DECIMAL(10,2)
	SET @FromAmount = (SELECT Balance FROM dbo.BankAccounts WHERE AccountID = @From);
	IF @FromAmount - @Amount < 0
		THROW 50001, 'First account does not have enough funds for this transfer.', 1

	IF NOT (EXISTS (SELECT * FROM dbo.BankAccounts WHERE AccountID = @From))
		THROW 50001, 'Origin account does not exist', 1

	IF NOT (EXISTS (SELECT * FROM dbo.BankAccounts WHERE AccountID = @To))
		THROW 50001, 'Destination account does not exist', 1;

	UPDATE dbo.BankAccounts SET Balance -= @Amount WHERE AccountID = @From
	UPDATE dbo.BankAccounts SET Balance += @Amount WHERE AccountID = @To
	COMMIT TRANSACTION
	SET XACT_ABORT OFF
;
GO

EXEC dbo.uspTransferMoney 50, 1, 3;
GO

SELECT *
FROM dbo.BankAccounts;
GO