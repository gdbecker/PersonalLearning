## CodeAlong

Example coded along with Tim during the Nested Classes and Types section. Also includes the below challenges:

### Bill's Burgers with Inner Classes Challenge

Create another inner class, called Burger.
This should be a specialized Item, and should also include a list of toppings, also Items.
Remember Items have a name, type, price, and methods to convert prices.
Allow a user to add toppings using the Meal class, which it should then delegate to its burger class.
Allow toppings to be added with a method that allows for a variable number of Strings to be entered, representing the toppings selected.
Allow toppings to be priced differently, some are free, some have an additional cost.
Print the toppings out along with the burger information.

### The Local and Anonymous Class Challenge

First, you need to create a record named Employee, that contains First Name, Last Name, and hire date.
Set up a list of Employees with various names and hire dates in the main method.
Set up a new method that takes this list of Employees as a parameter.
Create a local class to wrap this class, (pass Employee to the constructor and include a field for this) and add some calculated fields, such as full name, and years worked.

Create a list of employees using your local class.
Create an anonymous class to sort your local class employees, by full name, or years worked.
Print the sorted list.
Hint: Here is another review of a date function, which should help you with calculating years worked.

int currentYear = LocalDate.now().getYear()