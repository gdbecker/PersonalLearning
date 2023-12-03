let x;

// Child nodes from the parent
const parent = document.querySelector('.parent');
x = parent.childNodes; // returns a NodeList

x = parent.childNodes[0].textContent;
x = parent.childNodes[0].nodeName;

x = parent.childNodes[3].textContent;
x = parent.childNodes[3].outerHTML;

x = parent.childNodes[3].innerText = 'Child One';
x = parent.childNodes[5].style.color = 'blue';

x = parent.firstChild;
x = parent.lastChild.textContent = 'Hello';

// Parent nodes from a child
const child = document.querySelector('.child');

x = child.parentNode;
x = child.parentElement;

child.parentNode.style.backgroundColor = 'grey';
child.parentNode.style.padding = '10px';

// Sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');
x = secondItem;
x = secondItem.nextSibling;
x = secondItem.previousSibling;

console.log(x);