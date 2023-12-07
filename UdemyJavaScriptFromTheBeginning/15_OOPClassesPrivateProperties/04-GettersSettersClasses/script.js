// Example with 'bind()' and 'this'
class App {
	constructor() {
		this.serverName = 'localhost';

		// use 'bind' when you want to use 'this'
		// for event listeners
		document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
	}

	getServerName() {
		console.log(this.serverName);
	}
}

const a = new App();

class Person {
	constructor(firstName, lastName) {
		this._firstName = firstName; // underscore before the property name indicates privacy
		this._lastName = lastName;
	}

	get firstName() {
		return this.capitalizeFirst(this._firstName);
	}

	set firstName(value) {
		this._firstName = this.capitalizeFirst(value);
	}

	get lastName() {
		return this.capitalizeFirst(this._lastName);
	}

	set lastName(value) {
		this._lastName = this.capitalizeFirst(value);
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	capitalizeFirst(value) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}

const person1 = new Person('jon', 'Doe');
console.log(person1);
console.log(person1.firstName);

person1.firstName = 'ben';
console.log(person1);

person1.lastName = 'doe';
console.log(person1);

console.log(person1.fullName);