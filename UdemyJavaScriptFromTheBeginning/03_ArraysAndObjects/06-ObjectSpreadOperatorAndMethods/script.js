let x;

// Another way to declare an object
const todo = new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = true;

x = todo;

const person = {
	address: {
		coords: {
			lat: 45.21,
			lng: 79.41
		}
	}
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2}; // combines to the top level
const obj4 = Object.assign({}, obj1, obj2); // does same as above

x = obj3;
x = obj4;

const todos = [
	{ id: 1, name: 'buy milk'},
	{ id: 2, name: 'buy cheese'},
	{ id: 3, name: 'pickup children from school'}	
]

x = todos[0].name;

x = Object.keys(todo);

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');

console.log(x);