const form = document.getElementById('item-form');

function onSubmit(e) {
	e.preventDefault(); // stops the page from default behavior: refreshing the page on submit
	
	const item = document.getElementById('item-input').value;
	const priority = document.getElementById('priority-input').value;

	if (item === '' || priority === '0') {
		alert('Please fill in all fields.');
		return;
	}
}

function onSubmit2(e) {
	e.preventDefault();

	const formData = new FormData(form);

	const item = formData.get('item'); // uses the name field for the input
	const priority = formData.get('priority'); // uses the name field

	const entries = formData.entries(); // returns an Iterator 

	// console.log(item, priority);

	for (let entry of entries) {
		console.log(entry); // returns an array
	}
}

form.addEventListener('submit', onSubmit2);