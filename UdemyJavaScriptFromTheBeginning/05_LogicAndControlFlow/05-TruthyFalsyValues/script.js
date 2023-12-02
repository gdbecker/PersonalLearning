// Truthy and Falsy values
const email = 'test@test.com';

// Truthy
// String being coerced into a boolean
if (email) {
	console.log('You passed in an email');
}

// Falsy values, 6 of them
let x = false;
x = 0;
x = '';
x = null;
x = undefined;
x = NaN;

if (x) {
	console.log('This is truthy');
} else {
	console.log('This is falsy');
}

console.log(Boolean(x));

// Anything other than the 6 Falsy values above are Truthy
// These below are actually Truthy
let t = true;
t = ' ';
t = 'false';
t = [];
t = function() {};

// Truthy and Falsy caveats
const children = 0;

if (children !== undefined || !isNaN(children)) {
	console.log(`You have ${children} children`);
} else {
	console.log('Please enter a number for children');
}

// Checking for empty arrays
const posts = [];

if (posts.length > 0) {
	console.log('Lists posts');
} else {
	console.log('No Posts to list');
}

// Checking for empty objects
const user = {
	
}

if (Object.keys(user).length > 0) {
	console.log('List user');
} else {
	console.log('No user');
}

// Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(false === 0); // use strict equality to make sure you test also for the type

