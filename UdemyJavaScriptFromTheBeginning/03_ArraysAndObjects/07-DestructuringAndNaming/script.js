const firstName = 'Jon';
const lastName = 'Doe';
const age = 30;

// Don't need to specify key/value if names are the same
const person = {
	firstName,
	lastName,
	age
}

let x;

x = person.age;

// Destructure objects
const todo = {
	id: 1,
	title: 'Take out trash',
	user: {
		name: 'John'
	}
}

const { 
	id: todoId, 
	title, 
	user: { 
		name 
	} 
} = todo;

console.log(todoId, title, name);

// Destructure arrays
const numbers = [12, 67, 87, 45];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);