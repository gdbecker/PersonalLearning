// String
const firstName = "Sara";
const output = firstName;
console.log(output, typeof output);

// Number
const age = 30;
const temp = 98.9;
console.log(age, typeof age);
console.log(temp, typeof temp);

// Boolean
const hasChildren = true;
console.log(hasChildren, typeof hasChildren);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined
let score;
console.log(score, typeof score);

const anotherScore = undefined;
console.log(anotherScore, typeof anotherScore);

// Symbol
const id = Symbol("id");
console.log(id, typeof id);

// BigInt
const n = 98563274269825887n;
console.log(n, typeof n);

// Reference Types
const numbers = [3, 8, 90, 873];
console.log(numbers, typeof numbers);

function sayHello() {
	console.log("Hello");
}

console.log(sayHello, typeof sayHello);
