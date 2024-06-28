## 04_ Data Modelling

### Data Model
- Foundation to building data warehouse and BI solutions
- Primary goal of the data model is to act as a blueprint
- Helps build conceptual, logical, physical models and define relationships
- Define how the logical structure of a database is modeled
- Specifies business requirements and data structure
- Provides a visual way to communicate with the business at various levels
- Data Model is an important part of the development process (main communication method between your team)

### Data Modelling
- It's the process itself
- Identify and analyze business requirements
- Work with business on defining the data model
  - Interviews, meetings, reviewing existing process
- Define ERD notation style
  - Information Engineering (IE), Chen's Style, Barker, UML
- Define the model type
  - Conceptual, Logical, Physical
- Define Data Modelling Methodology
  - Relational data model (Entity Relationship (ER) data model)
  - Dimensional Model
- Develop and deploy the model

### ERD Notation
- ERD = Entity Relationship Diagram
- Creates a visual representation of your entities and the attributes
- Provides a preview of how all your tables should connect, what fields are going to be on each table
- Puts forth your conceptual ideas in a readable format
- ER diagrams used as a blueprint for implementation
- Composed of 3 elements:
  - Entity: the object from where data is collected and must have attributes
  - Attributes: entity properties that can be descriptors or identifiers
  - Relationship: the connection type between entities
- These components drawn together allows you to contextualize your data organization

### ERD Notation Styles
- There are a variety of notation styles: IE, Chen, Barker, UML
- Mostly see Chen and IE style notations
- Information Engineering (IE) Notation Style
  - Created by Clive Finklestein and James Margin (early 1980)
  - Most widely used
  - Uses lines with graphical symbols to indicate the relationship
  - Uses crow's foot notation to represent cardinality
- Chen Notation Style
  - Created by Peter Chen in the late 70s
  - Not widely used anymore
  - Uses different shapes and text values to explain the relationships

### Entity, Attributes, Relationships
- Entity
  - Is a class of object which is represented by a rectangle
  - This can be something that exists in the real world logically, physically, or conceptually
  - Such as a person, customer, employee, product, transaction, account
  - IE notation
    - No weak entity representation
  - Chen style
    - Weak entity - represented by double rectangle, something that can't be identified by its attributes alone
- Attributes
  - Properties that describe an entity (for customer it'll be name, email, address, etc)
  - IE notation
    - Attributes listed within the rectangle box
  - Chen style
    - Represented by an oval shape
    - Specific type of attributes also exists: multi-value, derived, unique (key), partial, etc
- Relationship
  - Connects one entity to another (a logical link)
  - For example: "a customer buys a product"
  - Entity customer is related to product
  - Relationship also have cardinality
  - IE notation
    - Only links 2 entities using a straight line
  - Chen style
    - Represented by a diamond
- Relationship cardinality
  - Cardinality defines possible number of attributes occurrence in one entity with another entity
  - For example: "one customer can purchase one or many products
  - There are 4 types of relationship cardinality:
    - One-to-One
      - Only a single instance of an entity is associated with a second entity, vice versa
    - One-to-Many
      - One instance from an entity is linked or can be associated with multiple entity instances of second entity
    - Many-to-One
      - More than one instance from an entity is linked or can be associated with one instance of second entity
    - Many-to-Many
      - More than one instance of an entity and more than one instance of another entity can be liked with the relationship
      - Better convert to either one-to-many or many-to-one (bridge tables)
- Weak relationship and weak entity
  - Weak Entity rely on existence of another entity
  - It can't be identified by its own attributes
  - A weak entity doesn't have a primary key and can't exist without its parent entity
  - It usually takes the primary key of the parent entity

### Steps to create an ERD
- Identity Entity
- Identify Relationship
- Identify Cardinality
- Identify Attributes
- ERD

### Information Engineering (IE) Notation Pros and Cons
- Pros
  - Most widely used
  - Easy to understand
  - Works well for designing Physical Model
  - Uses Crow's Foot notation for cardinality
- Cons
  - No strong set of standardization
  - Variation of representations can be confusing

### Chen's Notation Pros and Cons
- Pros
  - Easier to draw simple ER
  - Easier to understand
  - Good for teaching database concepts
- Cons
  - It can get too busy to be readable
  - Takes up too much space
  - Provides too much information for conceptual level (depends on how you design this)
  - It's not used much in the industry

### Data Model Types
- Conceptual
  - Business audience
  - Identify what the system contains but not the details
  - Focus is to identify what data is used in the business
  - This is the first version of the data model and can't be used to build a database
  - Goal of conceptual model is to act as a business requirements reference
  - Gives us understanding of high level and how each entity relates to each other
  - Doesn't describe the process flow itself
  - Features
    - Doesn't show primary keys or attributes
    - Shows entities and relationships
    - It's a high-level overview for the business and shows structure of data for the business
    - It's independent of a database and not implementation read
    - Very early stage of the modelling process where most of the concepts or objects might never make it to the final physical model
    - It identifies and helps with scoping requirements
    - Useful for PM as a communication tool
    - It's part of what builds the final ERD
- Logical
  - Architect and BA audience
  - Identifies how the system should be implemented
  - Focus on the business requirements
  - Focus is on the design of the data, not physical implementation
  - Add additional information to the conceptual model to give further level of details
  - It's independent of specific database design
  - It's a foundational layer for the Physical Model
  - Creates common understanding of business data
  - Sometimes called the Business Model
  - Features
    - Primary keys and foreign keys are present
    - All attributes are specified within an entity, will have data types
    - Relationships are specified using primary and foreign keys
    - Independent from DBMS
    - Normalization happens usually to 3NF
- Physical
  - DBA and developer audience
  - Identifies how the system will be implemented for specific DBMS system
  - It's the blueprint for the developer
  - Depending on data modelling choice, de-normalization can occur
  - Final result the Physical design can be different from Logical design
  - Features
    - Entities are not table names
    - Attributes become column names
    - Each column data type, length, nullable is specified
    - Relationship cardinality is defined

| Feature | Conceptual | Logical | Physical |
|--|--|--|--|
| Entity Names | ✔ | ✔ | ✔ |
| Entity Relationships | ✔ | ✔ | ✔ |
| Attributes |  | ✔ | ✔ |
| Table Names |  |  | ✔ |
| Column Names |  |  | ✔ |
| Column Data Types |  | ✔ | ✔ |
| Primary Keys |  | Optional | ✔ |
| Foreign Keys |  | Optional | ✔ |
| Target Audience | Business | Architect | Developer |

### Different Types of Keys
- What is a key?
  - Simply, a key is used to uniquely identify a record in a table
  - Important feature of a relational table
  - Establish and identify relationships
- Types
  - Primary
    - Uniquely identifies each instance (record/row) of an entity 
    - It cannot contain NULL and must be unique
    - Primary Key is a Candidate Key
    - Very important to have primary key and works best if it's numeric or an integer data type
    - Makes it efficient for joins, index, and sorting
  - Candidate
    - Any field that can be usd as a primary key
    - Should be unique and not null
    - Can have more than one candidate key in a table
    - Primary key is always a candidate key (Composite key, Natural key, Surrogate key)
  - Composite
    - It's a type of primary key
    - Created from a concatenation of multiple fields
    - Combo of the columns (attributes) ensures uniqueness
  - Natural
    - Type of primary key, natural keys are real data within the table
    - Natural keys have a business meaning
    - It's already part of the data when a new record is inserted into a table
    - Like social security number, invoice number, ISBN, etc
  - Surrogate
    - Another form of primary keys, generated at runtime (GUID, sequence, etc)
    - No business meaning but just a unique identifier
    - Typically a numeric value, and it's guaranteed to be unique
  - Foreign
    - It's used to join 2 entities
    - It's a primary key of the parent entity
    - Entity/Table that contains the foreign key is called the child table
    - Foreign keys enforces a referential integrity

### Recommended Tools for ERD
- Lucidchart - freemium, browser-based
- Draw.io - free, browser-based
- erwin Data Modeller - enterprise-friendly
- ER/Studio - enterprise-friendly
- MySQL Workbench - free, open-source, desktop tool