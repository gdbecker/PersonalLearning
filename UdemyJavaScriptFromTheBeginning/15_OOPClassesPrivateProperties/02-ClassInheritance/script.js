// Parent class
class Shape {
	constructor(name) {
		this.name = name
	}

	logName() {
		console.log('Shape name: ' + this.name);
	}
}

// Child class
class Rectangle extends Shape {
	constructor(name, width, height) {
		super(name); // calls the constructor for the parent class: Shape
		this.height = height;
		this.width = width;
	}
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

// Child class
class Circle extends Shape {
	constructor(name, radius) {
		super(name); // calls the constructor for the parent class: Shape
		this.radius = radius;
	}

	// Polymorphism: override logName()
	logName() {
		console.log('Circle name: ' + this.name);
	}
}

const cir = new Circle('Circle 1', 25);
console.log(cir);
cir.logName();

console.log(rect instanceof Shape); // true
console.log(rect instanceof Rectangle); // true