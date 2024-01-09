create database azuretest;
use azuretest

CREATE TABLE Employee(  
    EmpId int,  
    LastName varchar(255),  
    FirstName varchar(255),  
    Address varchar(255)
);


Alter table employee
ADD City varchar(255)

SELECT * FROM Employee

INSERT INTO Employee    (EmpId,LastName,FirstName,ADDRESS,City)
VALUES (1, 'XYZ', 'ABC', 'India', 'Mumbai' ); 

INSERT INTO Employee (EmpId,LastName,FirstName,ADDRESS,City)
VALUES (2, 'X', 'A', 'India', 'Pune' );

UPDATE Employee  
SET FirstName= 'KS', City= 'Pune'  
WHERE EmpId= 1;

DELETE FROM Employee WHERE EmpId=1; 