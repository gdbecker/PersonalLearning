function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 30, 30);

console.log(rect1.name, rect2.width);
console.log(rect1['width']);

// Add property
rect1.color = 'red';
console.log(rect1);

rect2.perimeter = () => 2 * rect2.width + 2 * rect2.height;
console.log(rect2.perimeter());
console.log(rect2);

// Delete property
delete rect2.perimeter;
console.log(rect2);

// Check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

// Get keys
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect1));

// Get entries
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`Key: ${key}, Value: ${value}`);
  }
}