// Else/If example
const d = new Date(10, 30, 2022, 8, 0, 0);
let hour = d.getHours();

if (hour < 12) {
	console.log('Good morning');
} else if (hour < 18) {
	console.log('Good afternoon');
} else {
	console.log('Good evening');
}

hour = 20;

// Nested if
if (hour < 12) {
	console.log('Good morning');
	if (hour == 6) {
		console.log('WAKE UP');
	}
} else if (hour < 18) {
	console.log('Good afternoon');
} else {
	console.log('Good evening');
	if (hour >= 20) {
		console.log('zzzzzzzzzzz');
	}
}

hour = 9;

// Multiple conditions
if (hour >= 7 && hour < 15) {
	console.log('It is work time');
}

hour = 6;

if (hour === 6 || hour === 20) {
	console.log('Brushing my teeth');
}