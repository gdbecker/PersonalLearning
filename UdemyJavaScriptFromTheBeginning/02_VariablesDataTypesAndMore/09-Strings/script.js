// Starter String concatenation
let x;
const name = "Jon";
const age = 30;
x = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String properties and methods
const s = "Hello World";
x = s.length; // property

// Access value by key
x = s[0];

// Shows methods available to an object
x = s.__proto__;

// Using String methods
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf("e");
x = s.substring(0, 2);
x = s.substring(6);
x = s.slice(-2); // can start from the end with negative numbers
x = "              Hello World";
x = s.trim();
x = s.replace("World", "John");
x = s.includes("Hello"); // returns boolean
x = s.valueOf(); // gets the true primitive value
x = s.split(" ");

console.log(x);