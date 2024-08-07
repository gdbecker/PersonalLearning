-- Chapter 2 challenge function
-- Evaluate temperatures in Warehouse.ColdRoomTemperatures
-- Less than 3.5 degrees is too cold
-- Greater than 4 degrees is too hot
-- Between 3.5 and 4 degrees is just right

CREATE OR ALTER FUNCTION Warehouse.TemperatureDescription (@Temp decimal(2))
RETURNS nvarchar(10)
AS
BEGIN
    DECLARE @Output nvarchar(10);
    SET @Output =
        CASE WHEN @Temp < 3.5 THEN 'Too Cold'
        WHEN @Temp > 4.0 THEN 'Too Hot'
        ELSE 'Just Right'
        END;
	RETURN @Output;
END;
GO

SELECT Warehouse.ColdRoomTemperatures.Temperature,
	Warehouse.TemperatureDescription(Warehouse.ColdRoomTemperatures.Temperature) as 'Description'
FROM Warehouse.ColdRoomTemperatures;
GO