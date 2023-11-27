## Lambdas Putting it Together Challenge

This challenge, is to exercise your skills with Arrays, ArrayLists, and the methods on these, which are targets for lambda expressions.
First, I want you to create an array of String, which is populated with first names, in mixed case.
Include at least one name, which is spelled the same backwards, and forwards, like Bob, or Anna.
Use Arrays.setAll, or List.replaceAll, to change the values in this array.
If you use List methods, you'll need a list backed by the array, so that changes get made to the initial array.

Using one of those two methods, perform the following functions on the elements in the array, with appropriate lambda expressions.
 - Transform names to all uppercase.
 - Add a randomly generated middle initial, and include a period.
- Add a last name that is the reverse of the first name.

Print your array or the array elements, after each change, using the forEach method, at least once.
Finally, create a new modifiable ArrayList from your names array, removing any names where the last name equals the first name.
Use removeIf with a lambda expression to do this last operation.