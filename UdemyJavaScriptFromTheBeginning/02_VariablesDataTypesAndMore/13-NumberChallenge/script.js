// Number Challenge

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sumOutput = x + y;
let differenceOutput = x - y;
let multiplyOutput = x * y;
let divideOutput = x / y;
let remOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${multiplyOutput}`);
console.log(`${x} / ${y} = ${divideOutput}`);
console.log(`${x} % ${y} = ${remOutput}`);