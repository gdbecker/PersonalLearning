const myMap = new Map();

myMap.set('name', 'Jon');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

// Check for membership of key
console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2);
console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', { 'phone': '555-555-5555', 'email': 'brad@email.com' });
peopleMap.set('eric', { 'phone': '222-222-2222', 'email': 'eric@email.com' });
peopleMap.set('jon', { 'phone': '000-000-0000', 'email': 'jon@email.com' });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys()); // returns an iterator
console.log(peopleMap.values()); // returns an iterator with actual values
console.log(peopleMap.entries()); 

const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);