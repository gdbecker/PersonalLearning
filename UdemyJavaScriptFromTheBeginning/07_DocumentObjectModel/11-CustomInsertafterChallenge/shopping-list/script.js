// InsertAfter Challenge

function insertAfter(newElement, existingElement) {
	// Get the parent element
	const parent = existingElement.parentNode;

	// Get next node after the existing node
	const sib = existingElement.nextSibling;
	console.log(parent);
	parent.insertBefore(newElement, sib);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);