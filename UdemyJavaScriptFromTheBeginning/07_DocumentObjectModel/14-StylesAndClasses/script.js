// CSS usually changes on events

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
	// className
	// console.log(itemList.className);
	// text.className = 'dark'; // overwrites what you can before
	
	// classList
	// console.log(itemList.classList); // DOMTokenList = array of classes
	// itemList.classList.forEach(c => console.log(c));

	// text.classList.add('dark');
	// text.classList.remove('card');
	// text.classList.toggle('hidden');

	// text.classList.replace('card', 'dark');

	// Change style
	// itemList.computedStyleMap.lineHeight = '3';

	items.forEach((item, index) => {
		item.style.color = 'red';

		if (index === 2) {
			item.style.color = 'blue';
		}
	});
}


document.querySelector('button').onclick = run;