// && - will return the first Falsy value or the last value

let b;

b = 10;

// if (b) {
// 	b = 20; 
// }

// b = b && 20;

b &&= 20;

console.log(b); // returns 20

// || - will return the first Truthy value or the last value

let a;

a = false;

// if (!a) {
// 	a = 20;
// }

// a = a || 10;

a ||= 10;

console.log(a); // returns 10

// ?? - returns the right side of the operand when the left side if null or undefined

let c;

c = null;

// if (c == null || c == undefined) {
// 	c = 20;
// }

// c = c ?? 20;

c ??= 20;

console.log(c); // returns 20