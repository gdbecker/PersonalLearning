// ArraysChallenges

// Challenge 1
const arr = [1, 2, 3, 4, 5];

let x = arr;
x.reverse();
x.unshift(6);
x.push(0);
console.log("Challenge 1");
console.log(x);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let y = arr1.slice(0, 4).concat(arr2);
console.log("Challenge 2");
console.log(y);