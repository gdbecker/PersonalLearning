// Type annotation examples with primitive types
// this variable will only have a type of number
let apples: number = 5;
apples = 20; // OK, because we assigned a number to the variable

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let color: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// classes
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let car: Car = new Car("Toyota", "Camry", 2018);

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
// (function arguments) => expected return type
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns the 'any' type
// json.parse() cannot predict the exact returned type on its own
const json = '{"result":true, "count":42}';
const obj: { result: boolean; count: number } = JSON.parse(json);
console.log(obj);

// 2. When we declare a variable on one line and initialize it later
let words = ["Hello", "World"];
let foundWord: string = "";

for (let i = 0; i < words.length; i++) {
  if (words[i] === "World") {
    foundWord = words[i];
    break;
  }
}

console.log(foundWord);

// 3. Variable whose type cannot be inferred correctly
let numbers = [-1, -2, 3];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    break;
  }
}
