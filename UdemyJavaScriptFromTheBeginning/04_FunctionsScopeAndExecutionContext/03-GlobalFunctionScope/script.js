console.log('width ' + window.innerWidth);

function run() {
	console.log('height ' + window.innerHeight);
}

run();

const x = 100;
console.log('in global ' + x);

if (true) {
	console.log(x, ' in block');
}

function add() {
	const y = 50;
	console.log(y);
}

// console.log(y); // won't work, y is a local block variable, not global

add();