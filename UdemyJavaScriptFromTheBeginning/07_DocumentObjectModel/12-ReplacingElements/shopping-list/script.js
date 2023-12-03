function replaceFirstItem() {
	const firstItem = document.querySelector('li:first-child');

	const li = document.createElement('li');
	li.textContent = 'Replaced First';

	firstItem.replaceWith(li);
}

function replaceSecondItem() {
	const secondItem = document.querySelector('li:nth-child(2)');

	secondItem.outerHTML = '<li>Replaced Second</li>';
}

function replaceAllItems() {
	const list = document.querySelectorAll('li');

	// list.forEach((item, index) => {
	// 	// item.outerHTML = '<li>Replace All</li>';
	// 	if (index === 1) {
	// 		item.innerHTML = 'Second Item'
	// 	} else {
	// 		item.innerHTML = 'Replace All';
	// 	}
	// })

	// Shortened version of above
	list.forEach((item, index) => index === 1 ? item.innerHTML = 'Second Item' : item.innerHTML = 'Replace All');
}

function replaceChildHeading() {
	const header = document.querySelector('header');
	const h1 = document.querySelector('header h1');

	const h2 = document.createElement('h2');
	h2.id = 'app-title';
	h2.textContent = 'Shopping List';

	header.replaceChild(h2, h1);
}

replaceFirstItem();

replaceSecondItem();

replaceAllItems();

replaceChildHeading();