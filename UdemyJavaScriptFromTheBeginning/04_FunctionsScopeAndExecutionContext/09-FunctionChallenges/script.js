// Function Challenges

// Challenge 1
const getCelsius = (f) => Number(String((f - 32) / 1.8)).toFixed(2);

console.log(`40 deg F is ${getCelsius(40)} deg C.`);

// Challenge 2
function minMax(nums) {
	return `{ min = ${Math.min(...nums)}, max = ${Math.max(...nums)} }`;
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (l, w) {
	console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${l * w}.`);
})(10, 5);