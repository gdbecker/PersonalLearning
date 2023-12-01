// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming conventions
// - Only letters, numbers, underscores, and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Reassigning variables
age = age + 1;
age += 1;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
	score += 1;
}

console.log(score);

// For const variables, once it's assigned you cannot change it
const score2 = 90;
// score2 += 2;

// But for objects, you can add/modify fields
const person = {
	name: "Garrett"
};

person.name = "John";
person.email = "john@email.com";

console.log(person);

// Declare multiple values at once
let a, b, c;
const 
	d = 10, 
	e = 20, 
	f = 30;
console.log(d, e, f);