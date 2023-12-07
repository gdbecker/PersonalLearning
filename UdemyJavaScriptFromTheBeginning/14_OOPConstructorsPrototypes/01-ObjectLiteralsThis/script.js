// Using the old object creator
// But have to copy/paste this code every time you want to make this one
// What if we had a blueprint?
const rectangle = {
	name: 'Rectangle1',
	width: 10,
	height: 10,
	area: function () {
		return this.width * this.height;
	},
};

console.log(rectangle.area());