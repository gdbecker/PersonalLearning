// Regular function as normal
function add(a, b) {
	return a + b;
}

console.log(add(3, 5));

// Arrow Function example
const addArrow = (a, b) => {
	return a + b;
}

console.log(addArrow(1, 3));

// Implicit return of arrow function
const subtractArrow = (a, b) => a - b;
console.log(subtractArrow(1, 3));

// Shorten even further
const double = a => a * 2;
console.log(double(10));

// Returning an object
// Curround curly braces with parenthesis
const createObj = () => ({
	name: 'G'
})
console.log(createObj());

// Arrow function in a callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n));
