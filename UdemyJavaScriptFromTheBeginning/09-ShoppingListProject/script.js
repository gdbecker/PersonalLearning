// Shopping List Project
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

// Display items from localStorage
function displayItems() {
	const itemsFromStorage = getItemsFromStorage();
	itemsFromStorage.forEach(item => addItemToDOM(item));

	// Check the UI
	checkUI();
}

// Add new items
function onAddItemSubmit(e) {
	e.preventDefault();
	const newItem = itemInput.value;

	// Validate input
	if (newItem === '') {
		alert('Please add an item');
		return;
	}

	// Check for edit mode
	if (isEditMode) {
		const itemToEdit = itemList.querySelector('.edit-mode');

		removeItemFromStorage(itemToEdit.textContent);
		itemToEdit.classList.remove('edit-mode');
		itemToEdit.remove();

		isEditMode = false;
	} else {
		if (checkIfItemExists(newItem)) {
			alert('That item already exists');
			checkUI();
			return;
		}
	}

	// Create item DOM element
	addItemToDOM(newItem);

	// Add item to localStorage
	addItemToStorage(newItem);

	// Check the UI
	checkUI();

	itemInput.value = '';
}

function addItemToDOM(item) {
	// Create list item
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(item));
	const button = createButton('remove-item btn-link text-red');
	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);
	li.appendChild(button);

	// Add item to the list
	itemList.appendChild(li);
}


function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;

	return button;
}

function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;

	return icon;
}

function addItemToStorage(item) {
	const itemsFromStorage = getItemsFromStorage();

	// Add new item to array
	itemsFromStorage.push(item);

	// Convert to JSON string and set to localStorage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

// Get items from localStorage
function getItemsFromStorage() {
	let itemsFromStorage;

	if (localStorage.getItem('items') === null) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	}

	return itemsFromStorage;
}

function onClickItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		removeItem(e.target.parentElement.parentElement);
	} else {
		setItemToEdit(e.target);
	}
}

// Prevent item duplicates
function checkIfItemExists(item) {
	let itemsFromStorage = getItemsFromStorage();
	itemsFromStorage = itemsFromStorage.map(i => i.toLowerCase());
	return itemsFromStorage.includes(item.toLowerCase());
}

// Edit an item
function setItemToEdit(item) {
	isEditMode = true;

	itemList.querySelectorAll('li').forEach(i => {
		i.classList.remove('edit-mode');
	});

	item.classList.add('edit-mode');

	formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
	formBtn.style.backgroundColor = '#228B22';

	itemInput.value = item.textContent;
}

// Remove and clear items
function removeItem(item) {
	if (confirm('Are you sure?')) {
		// Remove item from DOM
		item.remove();

		// Remove item from localStorage
		removeItemFromStorage(item.textContent);
	}

	// Check the UI
	checkUI();
}

function removeItemFromStorage(item) {
	let itemsFromStorage = getItemsFromStorage();

	// Filter out item to be removed
	itemsFromStorage = itemsFromStorage.filter((i) => i != item);

	// Re-set to localStorage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeAllItems(e) {
	if (confirm('Are you sure?')) {
		// Remove from the DOM
		while (itemList.firstChild) {
			itemList.removeChild(itemList.firstChild);
		}

		// Remove from localStorage
		localStorage.removeItem('items');
	}
	
	// Check the UI
	checkUI();
}

// Filter items
function filterItems(e) {
	const text = e.target.value.toLowerCase();

	const items = itemList.querySelectorAll('li');

	items.forEach(item => {
		const itemName = item.firstChild.textContent.toLowerCase();

		if (itemName.indexOf(text) != -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none'
		}
	});
}

// Check state of the app; add/remove elements as needed
function checkUI() {
	itemInput.value = '';

	const items = itemList.querySelectorAll('li');

	if (items.length === 0) {
		clearBtn.style.display = 'none';
		itemFilter.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		itemFilter.style.display = 'block';
	}

	formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
	formBtn.style.backgroundColor = '#333';

	isEditMode = false;
}

// Initialize app
function init() {
	// Event Listeners
	itemForm.addEventListener('submit', onAddItemSubmit);
	itemList.addEventListener('click', onClickItem);
	clearBtn.addEventListener('click', removeAllItems);
	itemFilter.addEventListener('input', filterItems);
	document.addEventListener('DOMContentLoaded', displayItems);

	checkUI();
}

init();