// Get all divs with key info
const keys = document.querySelectorAll('.key');
console.log(keys);

// addEventListener to the page
function onKeyPress(e) {
	e.key === ' ' ? keys[0].innerText = 'Space' : keys[0].innerText = e.key; 
	const a = document.createElement('small');
	a.innerHTML = 'e.Key';
	keys[0].appendChild(a);

	keys[1].innerText = e.keyCode;
	const b = document.createElement('small');
	b.innerHTML = 'e.keyCode';
	keys[1].appendChild(b);

	keys[2].innerText = e.code;
	const c = document.createElement('small');
	c.innerHTML = 'event.code';
	keys[2].appendChild(c);
}

// Run function to change divs based on key pressed
window.addEventListener('keypress', onKeyPress);