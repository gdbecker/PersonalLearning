// Getting unique values from an array
const set = new Set([1, 2, 3, 4, 4, 4, 4]);
console.log(set);

set.add(5)
console.log(set);

// Check for membership
console.log(set.has(5));
console.log(set.has(6));

// Removing
set.delete(5);
console.log(set);

// Convert set to array
const setArray = Array.from(set);
console.log(setArray);

// For of
for (let item of set) {
	console.log(item);
}

// Make an iterator
const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Removing all
set.clear();
console.log(set);