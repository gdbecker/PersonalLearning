// Any HTML tag on a page is an element
let x;

// Get child elements from the parent
const parent = document.querySelector('.parent');
x = parent.children; // HTMLCollection
x = parent.children[1]; // second child
x = parent.children[1].innerText;
x = parent.children[1].innerHTML;
x = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child THREE';

// Get parent elements from child
const child = document.querySelector('.child'); // first child
x = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
x = secondItem;
x = secondItem.nextElementSibling; // child three
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(x);





