// If statement syntax
if (true) {
	console.log('This is true');
}

// Won't run
if (false) {
	console.log('This is NOT true');
}

let x = 10;
let y = 5;

if (x > y || x >= y) {
	console.log(`${x} is greater than or equal to ${y}`);
}

y = 10;

if (x == y) {
	console.log(`${x} is equal to ${y}`);
} else {
	console.log(`${x} is NOT equal to ${y}`);
}

y = 9;

if (x != y) {
	const z = 20;
}

// Cannot access because z was defined in the if block
// console.log(z);

// Shorthand if
if (true) console.log('This is true');
else console.log('This is false');