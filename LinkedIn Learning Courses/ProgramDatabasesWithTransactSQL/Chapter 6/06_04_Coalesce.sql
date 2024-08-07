-- The COALESCE function
USE WideWorldImporters;
GO

-- Function syntax - Returns first non-null expression
COALESCE ( expression1, expression2, ... expression)

-- COALESCE example
-- Returns first value from a list of expressions that is not NULL
SELECT COALESCE(NULL, NULL, 'kangaroo', 'elephant');
SELECT COALESCE(NULL, NULL, NULL, NULL);

SELECT SupplierID,
		SupplierName,
		DeliveryMethodID,
		ISNULL(DeliveryMethodID, 1) as [IsNull],
		COALESCE(DeliveryMethodID, 1) as [Coalesce]
FROM Purchasing.Suppliers;

-- COALESCE is a shortcut for a much longer CASE statement
-- In fact, COALESCE gets rewritten into the equivalent CASE by SQL Server's query optimizer
SELECT CASE
WHEN ([expression1] IS NOT NULL THEN [expression1])
WHEN ([expression2] IS NOT NULL THEN [expression2])
...
WHEN ([expression] IS NOT NULL THEN [expression])
ELSE NULL
END;

SELECT CASE
WHEN (NULL IS NOT NULL) THEN NULL
WHEN (NULL IS NOT NULL) THEN NULL
WHEN ('kangaroo' IS NOT NULL) THEN 'kangaroo'
WHEN ('elephant' IS NOT NULL) THEN 'elephant'
ELSE NULL
END;

-- Use COALESCE to merge values from multiple columns if NULLs are present
SELECT StockItems.StockItemID,
	StockITems.StockItemName,
	Colors.ColorName,
	StockItems.Brand,
	StockItems.Size
FROM Warehouse.StockItems LEFT JOIN Warehouse.Colors
	ON StockItems.ColorID = Colors.ColorID
ORDER BY StockItemID;

SELECT StockItems.StockItemID,
	StockITems.StockItemName,
	Colors.ColorName,
	StockItems.Brand,
	StockItems.Size,
	COALESCE(ColorName, Brand, Size) as ColorBrandSize
FROM Warehouse.StockItems LEFT JOIN Warehouse.Colors
	ON StockItems.ColorID = Colors.ColorID
ORDER BY StockItemID;

-- CASE may still be a better choice for flexibility
SELECT StockItems.StockItemID,
	StockITems.StockItemName,
	Colors.ColorName,
	StockItems.Brand,
	StockItems.Size,
	COALESCE(ColorName, Brand, Size) as ColorBrandSize,
	MarketingComments,
	CASE
		WHEN (MarketingComments IS NOT NULL) THEN MarketingComments
		WHEN (ColorName IS NOT NULL) THEN CONCAT('Color is ', ColorName)
		WHEN (Brand IS NOT NULL) THEN CONCAT('Brand is ', Brand)
		WHEN (Size IS NOT NULL) THEN CONCAT('Size is ', Size)
		ELSE 'No Information Available'
		END AS CatalogDescription
FROM Warehouse.StockItems LEFT JOIN Warehouse.Colors
	ON StockItems.ColorID = Colors.ColorID
ORDER BY StockItemID;