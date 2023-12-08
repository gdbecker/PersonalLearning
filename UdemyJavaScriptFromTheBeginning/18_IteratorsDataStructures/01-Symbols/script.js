const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('bar');

console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym1, typeof sym1);
console.log(sym1.description);

console.log(Symbol('sym') === Symbol('sym')); // false

const user = {
	[Symbol('id')]: 1,
	name: 'Jon Doe',
	email: 'jon@email.com'
}

// user.id = 2; // won't change the symbol id, but adds another key and value

console.log(user);

// Symbols are NOT enumerable
console.log(Object.keys(user)); // symbol id won't show up
console.log(Object.values(user)); // symbol id won't show up

for (let key in user) {
	console.log(key);
}

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)); // now the symbol id will show

// Symbol.for()
// checks the global Symbol registry
const sym4 = Symbol.for('foo');
const sym5 = Symbol.for('foo');

console.log(sym4 === sym5); //true, because of using Symbol.for()
console.log(Symbol.keyFor(sym4)); // foo

console.log(sym1.toString());
console.log(sym4.toString());

console.log(sym1.valueOf());
console.log(sym4.valueOf());

console.log(Object.getOwnPropertyNames(Symbol));