const div = document.createElement('div');
console.log(div);

div.className = 'my-element';
console.log(div);

div.id = 'my-element';
console.log(div);

div.setAttribute('title', 'My Element');
console.log(div);

// This is one way to add text, but there's a better way
// div.innerText = 'My JS div';
// console.log(div);

const text = document.createTextNode('Hello world!');
div.appendChild(text);
console.log(div);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
