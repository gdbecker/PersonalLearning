const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Appying addEventListener to each li
// listItems.forEach(item => {
// 	item.addEventListener('click', (e) => {
// 		e.target.remove();
// 	});
// });

// Applying addEventListener to the parent element
list.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.style.color = 'red';
	}
});