let x;

// Array literal
const numbers = [12, 45, 68, 78, 54];
const mixed = [12, true, null, false, 15];

// Array constructor
const fruits = new Array('orange', 'banana', 'apple', 'pear');

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}.`;

x = numbers.length;

// Arrays are inherently mutable
fruits[2] = 'grape';

// fruits.length = 2;

fruits[fruits.length] = 'peach';
fruits.push('strawberry');

x = fruits;

console.log(x);