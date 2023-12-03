// While loop
// Make sure you increment/decrement the counter
let i = 0;

while (i <= 20) {
	console.log('Number is ' + i);
	i++;
}

// Loop over arrays
i = 0;
const arr = [10, 20, 30, 40];

while (i < arr.length) {
	console.log(arr[i]);
	i++;
}

// Nesting While loops
i = 1;

while (i <= 5) {
	console.log('Number is ' + i);

	let j = 1;
	while (j <= 5) {
		console.log('j = ' + j);
		j++;
	}

	i++;
}

// Do While loop
// Will run at least once even when the condition turns false
let y = 1;

do {
	console.log(y);
	y++;
} while (y <= 5);
