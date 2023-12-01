// Values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
	name: "Garrett",
	age: 28
}

// Primitive variables won't change each other if you change one variable
// these are on the stack and changing one won't affect the other
let newName = name;
newName = "G";
console.log(name, newName);

// Any reference to a single object will change that object
// so all references will look the same when printed
// because these are on the heap
let newPerson = person;
newPerson.name = "GB"
console.log(person, newPerson);