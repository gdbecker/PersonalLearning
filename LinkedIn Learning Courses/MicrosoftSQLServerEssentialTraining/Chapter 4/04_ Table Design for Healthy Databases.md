## 04_ Table Design for Healthy Databases

### Data Types
- Your goals
  - Maximize storage efficiency
  - Decrease network traffic
  - Protect the integrity and consistency of the data
  - **Pick the smallest data type that will accommodate your data**

### SQL Server Data Type Options
- Numeric Data Types

| Data Type | Range | Storage |
|--|--|--|
| bit | 0 or 1 | 1 bit |
| tinyint | 0 to 255 | t byte (8 bits) |
| smallint | -32,768 to 32,767 | 2 bytes |
| int | -2,147,483 to 2,147,483 | 4 bytes |
| bigint | -9,223,036,854,775,808 to 9,223,036,854,775,808 | 8 bytes |
| decimal (p, s) | precision (p) - total number of digits; scale (s) - number of those digits right of decimal point | 5 to 17 bytes |
| numeric (p, s) | precision (p) - total number of digits; scale (s) - number of those digits right of decimal point | 5 to 17 bytes |
| smallmoney | -214,748.3648 to 214,748.3648 | 4 bytes |
| money | -922,377,203,685,477.5808 to 922,377,203,685,477.5808 | 8 bytes |

- Date and time
  - time
  - date
  - datetime2
  - datetimeoffset

- Character Strings

| Data Type | Range | Storage |
|--|--|--|
| char(#) | Fixed-length string up to 8,000 characters | 1 byte per character |
| varchar(#) | Variable-length string up to 8,000 characters | 1 byte per character |
| nchar(#) | Fixed-length Unicode string up to 4,000 characters | 2 bytes per character |
| nvarchar(#) | Variable-length Unicode string up to 4,000 characters | 2 bytes per character |
| varchar(max) |  | Up to 2 gigabytes |
| nvarchar(max) |  | Up to 2 gigabytes |

- Specialty Types
  - Geometry
  - Geography
  - Unique identifiers
  - XML
- Reference: https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16