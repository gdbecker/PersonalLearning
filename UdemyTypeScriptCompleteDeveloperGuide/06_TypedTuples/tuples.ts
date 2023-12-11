// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// tuple
// order inside of a tuple matters
// ":[string, boolean, number]" makes it a tuple and not an array
const pepsi:[string, boolean, number] = ['brown', true, 40];

// another way to do the above
type Drink = [string, boolean, number];
const sprite:Drink = ['clear', true, 50];
const tea:Drink = ['green', false, 0];

const carSpecs = [
  ['brand', 'Tesla'],
  ['model', 'Model 3'],
  ['year', 2020]
];