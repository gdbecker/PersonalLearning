// Reduce also returns something
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
}, 0);

console.log(sum);

// Shorter way
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

// Using a for loop
const sum3 = () => {
	let acc = 0;
	for (const n of numbers) {
		acc += n;
	}
	return acc;
}

console.log(sum3());

// Another example
const cart = [
	{ id: 1, product: 'One', price: 1.20 },
	{ id: 2, product: 'Two', price: 1.57 },
	{ id: 3, product: 'Three', price: 2.41 },
	{ id: 4, product: 'Four', price: 6.74 },
	{ id: 5, product: 'Five', price: 0.71 },
	{ id: 6, product: 'Six', price: 1.97 },
	{ id: 7, product: 'Seven', price: 3.54 }
]

// Get the total of all cart item prices
const sum4 = cart.reduce((acc, product) => acc + product.price, 0);
console.log(sum4);