const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
	console.log('keypress');
}

const onKeyUp = e => {
	console.log('keyup');
}

const onKeyDown = e => {
	console.log('keydown');

	// key
	// console.log(e.key);
	// document.querySelector('h1').innerText = e.key;

	// if (e.key === 'Enter') {
	// 	console.log('You pressed Enter');
	// }

	// keyCode
	// console.log(e.keyCode);

	// if (e.keyCode === 13) {
	// 	console.log('You pressed Enter');
	// }

	// code
	// console.log(e.code);

	// if (e.code === 'Digit1') {
	// 	console.log('You pressed 1');
	// }

	if (e.repeat) {
		console.log('You are holding down ' + e.key);
	}

	console.log('Shift: ' + e.shiftKey);
	console.log('Control: ' + e.ctrlKey);
	console.log('Alt: ' + e.altKey);
}

// Keyboard Event examples
// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);