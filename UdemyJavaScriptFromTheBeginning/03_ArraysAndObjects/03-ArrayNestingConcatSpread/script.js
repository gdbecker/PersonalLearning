let x;

// Nesting
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];
// fruits.push(berries);

x= fruits;

// x = fruits[3][1]; // gets item from nested array

const allFruits = [fruits, berries];
x = allFruits;

// Concatenation
x = fruits.concat(berries);

// Spread
x = [...fruits, ...berries];

// Flatten arrays
const arr = [1, 2, 3, 4, 5, [6, 7], [8, 9]];
x = arr.flat(); // no more nesting

// Static methods on Array object
x = Array.isArray(fruits);

x = Array.from('12345');

x = Array.of(1, 2, 3);

console.log(x);

