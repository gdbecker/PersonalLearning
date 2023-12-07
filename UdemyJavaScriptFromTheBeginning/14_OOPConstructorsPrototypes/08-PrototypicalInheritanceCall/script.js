function Shape(name) {
	this.name = name;
}

Shape.prototype.logName = function() {
	console.log(`Shape name: ${this.name}`);
}

// Prototype inheritance
function Rectangle(name, height, width) {
	Shape.call(this, name);

	this.height = height;
	this.width = width;
}

// Inheriting the Shape prototype functions
Rectangle.prototype = Object.create(Shape.prototype);

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;

// Polymorphism with prototypes
Rectangle.prototype.logName = function() {
	console.log(`Rectangle name: ${this.name}`);
}

const rect = new Rectangle('Rectangle 1', 20, 20);
console.log(rect);
rect.logName();

// Prototype inheritance
function Circle(name, radius) {
	Shape.call(this, name);

	this.radius = radius;
}

// Inheriting the Shape prototype functions
Circle.prototype = Object.create(Shape.prototype);

// Set prototype constructors
Circle.prototype.constructor = Circle;

const circle = new Circle('Circle 1', 25);
console.log(circle);
circle.logName();
console.log(circle.constructor);
