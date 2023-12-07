## 01 - Object Literals and This

### What is OOP?

- OOP/Object Oriented Programming is a programming paradigm or a way of thinking about and structuring code
- It is a specific style to implement certain principles
- There are other bparadigms such as procedural, functional, and logic
- OOP is extremely common in many different languages

### What is an Object?

- 'Self-contained' piece of code that is a collection of methods and properties
- Objects are used as building blocks and can interact with one another
- There are many ways to create objects in JS. We have object literals, constructor functions, classes, factories, and more
- We have worked with many objects already, and we have even created some using the object literal syntax

### Examples of Common Objects

- User
- Post
- Comment
- UI Component
- Product
- Order
- Cart
- Customer
- Employee
- Message
- Book
- Item

### Why use OOP?

- Can make your code easier to read and understand
- Prevents spaghetti code
- Flexible and allows you to build complex applications
- NOT always needed. OOP can be overkill for smaller projects
- It's great for more complex projects, especially if working on a team

### Components of OOP

| Name                       | Description                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| Constructor Functions (JS) | Creates a blueprint for an object                                                            |
| Prototypes (JS)            | A way for objects to inherit properties and methods from one another                         |
| Classes                    | Another way to create a blueprint. "Syntactic Sugar" in JS, but part of many other languages |
| Instances                  | Objects are "instantiated" using the blueprint (Constructor or class)                        |

### 4 Principles of OOP

- Abstraction
  - Hiding all but the relevant parts of an object in order to reduce complexity and increase efficiency
  - We have already seen abstraction many times in the course
  - When we use fetch() or we create an event listener with addEventListener()
  - We have no clue how it works, but we know about the methods and parts that are relevant to what we're doing
- Encapsulation
  - The process of wrapping up data and methods into a unit such as a class or a function
  - Usually includes some kind of "data hiding"
- Inheritance
  - The process of inheriting the properties and methods from a parent class or constructor
- Polymorphism
  - The process of inheriting the properties and methods from a parent class or constructor
  - Example: using the same method for many types of objects (each object implements the same method name but does it differently)
