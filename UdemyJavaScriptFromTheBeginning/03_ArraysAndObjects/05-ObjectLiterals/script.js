// Make an object
const person = {
	name: 'Jon Doe',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main St',
		city: 'Boston',
		state: 'MA'
	},
	hobbies: ['music', 'sports']
};

let x;

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies;

person.name = 'Jane';
x = person;

// delete person.age;

// Add new properties like this
person.hasChildren = true
person.greet = function() {
	console.log(`Hello, my name is ${this.name}`);
}

person.greet();

console.log(x);