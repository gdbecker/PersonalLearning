// For Of syntax
// Loop over arrays
const items = ['book', 'table', 'chair', 'kite'];

for (let i of items) {
	console.log(i);
}

// Loop over objects
const users = [
	{
		name: 'G'
	},
	{
		name: 'S'
	},
	{
		name: 'K'
	}
]

for (let u of users) {
	console.log(u);
}

// Loop over strings
const str = 'Hello World';
for (let l of str) {
	console.log(l);
}

// Loop over maps
const map = new Map();
map.set('name', 'Jon');
map.set('age', 30);

for (const [key, value] of map) {
	console.log(key, value);
}