const x = 100;

// y is a block level variable
if (true) {
	const y = 200;
	console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

if (true) {
	const a = 500;
	let b = 600;
	var c = 700;
}

// console.log(a); // error because a is block scope

console.log(c); // no error even though c is block scope, because of using var for c

function run() {
	var d = 800;
	console.log(d);
}

run();
console.log(d); // won't work because var is function scoped

