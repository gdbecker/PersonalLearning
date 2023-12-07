const now = new Date(); // initializing a constructor function

// Make our own object blueprint
function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
	this.area = function () {
		return this.width * this.height;
	}
}

const rect1 = new Rectangle('Rectangle 1', 10, 20); // 'new' keyword instantiates a Rectangle
console.log(rect1);
console.log(rect1.area());

console.log(rect1.constructor);
console.log(rect1 instanceof Rectangle);