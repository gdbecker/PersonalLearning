// IIFE syntax
// This works because 'user' is not in the global scope like the "otherscript.js" file
(function () {
	const user = 'Jon';
	console.log(user);

	const hello = () => console.log('hello from the IIFE');
	hello();
})();

// Adding parameters to the IIFE
(function (name) {
	console.log('hello ' + name);
})('Shawn');

// This is an example of recursion
// Would crash your browser
// It keeps calling itself
// (function hello() {
// 	console.log('Hello');
// 	hello();
// })();
