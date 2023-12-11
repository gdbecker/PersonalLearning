// Clearly saying number is the return type
const add = (a: number, b: number): number => {
  // return "kgjhkfjg"; // won't work because number was declared as the return type after the a & b arguments above
  return a + b;
};

// Type inference being used here, to know that number is the returned type
const subtract = (a: number, b: number) => {
  return a - b;
};

// another function declaration
function divide(a: number, b: number): number {
  return a / b;
}

// another function declaration
const multiply = function (a: number, b: number): number {
  return a * b;
};

// no return type needed, so use void
// void can also be used for null or undefined return types
const logger = (message: string): void => {
  console.log(message);
};

// use never to indicate that you'll never reach the end of the function
// rare use case
// const throwError(message: string): never => {
//   throw new Error(message);
// }

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);