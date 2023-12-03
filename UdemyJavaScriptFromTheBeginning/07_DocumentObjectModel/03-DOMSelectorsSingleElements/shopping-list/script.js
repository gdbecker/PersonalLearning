// Select single elements on the page

// document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = 'Shopping-List';
document.getElementById('app-title').setAttribute('class', 'title');

// Set it to a variable
const title = document.getElementById('app-title');
console.log(title);

// Get or change or add content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again'; // more common
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles, when you need styles dynamic
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
// usually used to select a class
console.log(document.querySelector('h1')); // selects the first one
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container')); 
console.log(document.querySelector('input[type="text"]')); 
console.log(document.querySelector('li:nth-child(2)').innerText); 


const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'blue';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li'); // first list item
firstItem.style.color = 'green';

