## 05_ Normalization and De-Normalization

### Normalization
- What is it?
  - Edgar Frank Codd inventor of relational models for database management proposed concept of normalization
  - This splits large tables into smaller ones and joins them together using relationships
  - It's a way to organize data in our database and part of the modelling process
  - This enhances the distribution of data, hence reducing data anomalies
  - This is why ER models are a set of normalized tables and is used for transactional databases (OLTP)
  - Different levels of normal forms and normalization rules
- What does it look like?
  - Minimizes data redundancy and improves data integrity
  - It's a way to organize data in our database and part of the modelling process
- What is data redundancy?
  - Where data is repeated in multiple places
  - Non-normalized tables take more space and also creates data anomalies

### Data Anomalies
- 3 types
  - Insertion
    - Happens when we cannot insert data into the table without populating other fields
  - Deletion
    - Unintended loss of attributes due to deletion of another attribute
  - Modification 
    - Data redundancy caused by partial update of data, causing inconsistency in the database

### Normalization Levels
- First normal form (1NF)
  - Must have a primary key
  - Should only hold single valued attributes
  - Must be atomic (single stored value cannot be subdivided)
  - No repeating groups
- Second normal form (2NF)
  - Should be 1NF
  - Eliminate redundant data
  - All the non-key columns should be dependent on the table's primary key
  - Should not contain partial dependency
- Third normal form (3NF)
  - Must be in 2NF
  - Eliminate columns not dependent on the key
  - Should not have transitive dependency
- Fourth normal form (4NF) or Boyce Codd Normal Form (BCNF)
- Fifth normal form (5NF)
- COncept of normalization levels is a fairly complicated area
- Theory of normalization is evolved as the time changes
- But for most transaction systems (OLTP) normalization achieves its best in 3rd normal form
- This is why ER model is often called 3rd normal form (3NF) or normalized model 
- 3 steps to normalize an entity
  - 1NF -> 2NF -> 3NF
- Functional Dependency
  - Each table only represents one area
  - Every other column depends on customer_id
  - To retrieve customer info all you need is the id
  - Composite keys can also create functional dependencies

### Pros and Cons of Normalized Models
- Advantages
  - Reduced data redundancy and improved data integrity
  - Helps reduce issues caused by data anomalies
  - Smaller in size, saves storage
  - No data duplications
  - Easy to maintain and conceptually easy to understand
- Disadvantages
  - Performance issues due to multiple joins
  - Slow speed due to multiple tables
  - Not suitable for analytical queries
  - Complex database structure

### De-Normalization
- It's an optimization technique
- Helps you speed up your data retrieval
- Requires adding redundancy to various tables
- Techniques
  - Adding redundant columns
    - Used for frequently accessed columns with large joins
    - Frequently used column is added to avoid joins
    - Only a subset of column is moved, not all
  - Storing derived columns
    - Frequently required derived values
    - Accessing aggregated values from larger joins
    - Reduces amount of query processing time
    - Possible data staleness
    - DML statements requires recalculation
  - Pre-joining tables
    - Similar to adding redundant columns
    - Pre-joining adds all the columns
    - However, can introduce redundancy in the table
    - Can results in storing large amounts of data
- Advantages
  - Joins pre-defined reducing the joins at query time
  - Improve performance and retrieval speed
  - Less compute required
  - Accelerated reporting
  - Suitable for analytical purposes
- Disadvantages
  - Large table sizes
  - Increased storage costs due to large volumes of data being stored
  - Possibility of data anomalies
  - Less flexible
  - Insert and updates can be complicated and expensive

| Normalization | De-Normalization |
|--|--|
| OLTP systems | OLAP systems |
| Removed redundancy | Added redundancy |
| Reduce inconsistency | Potential inconsistencies |
| Requires more joins | Fewer joins |
| Complex data model | Simpler data model |
| Faster data writes | Faster data reads |