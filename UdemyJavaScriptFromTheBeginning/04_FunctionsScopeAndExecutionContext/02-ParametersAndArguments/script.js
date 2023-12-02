// Can put default value for the parameter
function registerUser(user = 'Bot') {
	// if (!user) {
	// 	user = 'Bot';
	// }
	return user + ' is registered';
}

// 'Jon' is the argument for the function
console.log(registerUser('Jon'));

// Rest Params
function sum(...numbers) {
	let total = 0;

	for (const num of numbers) {
		total += num;
	}

	return total;
}

console.log(sum(1, 2, 3));

// Objects as params
function loginUser(user) {
	return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
	id: 1,
	name: 'Jon'
}

console.log(loginUser(user));

// Arrays as params
function getRandom(...arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandom(1, 2, 3, 4, 5));