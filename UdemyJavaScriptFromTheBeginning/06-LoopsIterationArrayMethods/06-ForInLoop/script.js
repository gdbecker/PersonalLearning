// For In loop syntax
// Helpful in getting the keys or indices
// Loop in an object
const colorObj = {
	color1: 'red',
	color2: 'blue',
	color3: 'purple',
	color4: 'gold',
	color5: 'green'
}

for (const key in colorObj) {
	console.log(key, colorObj[key]);
}

// Loop in an array
const colorArr = ['red', 'blue', 'gold', 'purple', 'green'];
for (const key in colorArr) {
	console.log(colorArr[key]);
}