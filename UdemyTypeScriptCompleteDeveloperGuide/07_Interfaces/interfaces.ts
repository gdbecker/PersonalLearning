// using objects
const oldCivic = {
  make: "Honda",
  model: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `The ${this.year} ${this.make} ${this.model} is ${
      this.broken ? "broken" : "not broken"
    }.`;
  },
};

const printVehicle1 = (vehicle: {
  make: string;
  model: string;
  year: Date;
  broken: boolean;
  summary(): string;
}): void => {
  console.log(vehicle.summary());
};

console.log("\nUsing object destructuring for type annotation");
printVehicle1(oldCivic);

// use an interface instead of repeating the lengthy type annotation
interface Vehicle {
  make: string;
  model: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

console.log("\nUsing an interface for type annotation");
printVehicle2(oldCivic);

// we can use a more general interface that just looks for this one function, and that function can include other fields from the object
// all TS is looking for is that summary function
interface Reportable {
  summary(): string
}

const drink = {
  name: 'Pepsi',
  color: 'brown',
  summary(): string {
    return `A ${this.color} ${this.name}.`;
  }
}

const printDetails = (item: Reportable): void => {
  console.log(item.summary());
}

console.log("\nUse a more general interface to print details");
printDetails(oldCivic);
printDetails(drink);