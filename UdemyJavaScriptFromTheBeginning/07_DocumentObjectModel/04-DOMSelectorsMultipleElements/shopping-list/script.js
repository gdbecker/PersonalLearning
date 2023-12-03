// Selecting multiple elements on the page at once

// querySelectorAll()
const listItems = document.querySelectorAll('li');
console.log(listItems[1].innerText); // returns a NodeList (an array-like structure)
console.log(listItems); // returns a NodeList (an array-like structure)

// listItems.forEach((item, index) => {
// 	item.style.color = 'green';

// 	if (index === 1) {
// 		item.remove();
// 	}

// 	if (index == 0) {
// 		item.innerHTML = `Oranges
// 		<button class="remove-item btn-link text-red">
// 			<i class="fa-solid fa-xmark"></i>
// 		</button>`;
// 	}
// });

// getElementsByClassName()
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); // returns HTMLCollection

// convert HTMLCollection to an array
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach(i => console.log(i));

// getElementsByTagName()
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); // also an HTMLCollection


