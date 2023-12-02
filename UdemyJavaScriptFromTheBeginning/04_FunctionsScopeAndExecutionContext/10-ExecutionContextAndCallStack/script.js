const x = 20;
const y = 30;

function getSum(a, b) {
	return a + b;
}

console.log(getSum(x, y));
console.log(getSum(5, 15));

function first() {
	console.log('first');
	second();
}

function second() {
	console.log('second');
	third();
}

function third() {
	console.log('third');
}

first();