// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
	name: 'Rectangle 1',
	width: 10,
	height: 10
}

// Sets 'configurable' to false on all properties
Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

// Can't add/remove properties
rectObj.color = 'red';
delete rectObj.name;

console.log(descriptors);

const circleObj = {
	name: 'Circle 1',
	radius: 25
}

// Sets 'configurable' and 'writable' to false on all properties
Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

// Can't add/remove properties, or modify existing properties
circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

console.log(descriptors);

// If you freeze and object, it is also sealed
console.log('rectObj is sealed? ' + Object.isSealed(rectObj));
console.log('rectObj is frozen? ' + Object.isFrozen(rectObj));
console.log('circleObj is sealed? ' + Object.isSealed(circleObj));
console.log('circleObj is frozen? ' + Object.isFrozen(circleObj));
