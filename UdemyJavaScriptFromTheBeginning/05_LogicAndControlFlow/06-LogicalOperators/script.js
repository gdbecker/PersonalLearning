console.log(10 > 20 && 30 > 15); // false
console.log(10 > 20 || 30 > 15); // true
console.log(10 > 20 || 30 < 15); // false

// && - will return the first Falsy value or the last value
let a;

a = 10 && 20;
console.log(a); // returns the last

a = 10 && 0 && 30;
console.log(a); // returns 0, the first Falsy value

a = 10 && '' && 0 && 30;
console.log(a); // returns '', the first Falsy value

// Example of doing the above
const posts = [];
posts.length > 0 && console.log(posts[0]);

// || - will return the first Truthy value or the last value
let b;

b = 10 || 20;
console.log(b); // returns 10, the first Truthy value

b = 0 || 20;
console.log(b); // returns 20, the first Truthy value and also the last value

b = 0 || null || undefined;
console.log(b); // returns undefined, the last value

// ?? - returns the right side of the operand when the left side if null or undefined
let c;

c = 10 ?? 20;
console.log(c); // returns 10

c = null ?? 20;
console.log(c); // returns 20

c = '' ?? 20;
console.log(c); // returns ''