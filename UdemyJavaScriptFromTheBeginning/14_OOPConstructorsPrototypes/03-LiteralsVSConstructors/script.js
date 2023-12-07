const strLit = 'Hello'; // literal
const strObj = new String('Hello'); // object

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing: literal -> object
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing: object -> literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor); // boxing
console.log(strObj.constructor);

console.log(strLit instanceof String); // true
console.log(strObj instanceof String); // false

// Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const funcLit = function(x) {
	return x * x;
}
console.log(funcLit, typeof funcLit);

const funcObj = new Function('x', 'return x * x');
console.log(funcObj, typeof funcObj);

const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);