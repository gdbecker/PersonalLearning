// type inference happening here
const carMakers = ["Honda", "Toyota", "Subaru", "Mazda"];

// specific type annotation
const carMakers2: string[] = [];

// type inference
const dates = [new Date(), new Date()];

// specific type annotation
const carsByMake: string[][] = [["f150"], ["corolla"], ["camry"], ["civic"]];

// benefits of using typed arrays
// help with inference when extracting values
const car = carMakers[0];
const myCar = carsByMake.pop();

// prevent incompatible values
// carMakers.push(100); // error!
carMakers.push("Ford"); // ok!

// help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), "2020-01-01"];
importantDates.push("2030");
importantDates.push(new Date());