// View the Window object, which contains the Document object
console.log(window);

console.log(window.document);
// or
console.log(document);

console.dir(window.document);

console.log(document.body.innerHTML);
console.log(document.body.innerText);

// Get all links on a page
console.log(document.links[0]);

// Can replace innerHTML like this
// document.body.innerHTML = '<h1>Hello</h1>';

// This isn't used very much
// document.write('Hello from JS');

// Select id = main
console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main a').innerText = 'Hello';