const arr = [12, 25, 67, 89];
let x;

// Array methods
arr.push(100); // adds element to the end

arr.pop(); // removes element at the end

arr.unshift(99); // adds element to the beginning

arr.shift(); // removes element from the beginning

arr.reverse();
arr.reverse();

x = arr;

x = arr.includes(12); // returns boolean

x = arr.indexOf(12);

// Slice does not change original array
x = arr.slice(1, 4); // start index, stops before end index
x = arr.slice(1); // start at 1 and grabs everything after

// Splice changes original array
// x = arr.splice(1, 4);

// x = arr.splice(0, 1); // start at index, take out # of elements

x = arr.slice(1, 3).toString().charAt(0);



console.log(x);

