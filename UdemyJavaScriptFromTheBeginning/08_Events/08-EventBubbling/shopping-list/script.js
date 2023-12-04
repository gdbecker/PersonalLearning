const btn = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

btn.addEventListener('click', (e) => {
	alert('The button was clicked'); // the below functions get triggered also when button is clicked: that's bubbling
	e.stopPropagation(); // remedies bubbling
})

div.addEventListener('click', () => {
	alert("Div was clicked");
})

form.addEventListener('click', () => {
	alert("Form was clicked");
})

document.body.addEventListener('click', () => {
	alert('Body was clicked');
})

