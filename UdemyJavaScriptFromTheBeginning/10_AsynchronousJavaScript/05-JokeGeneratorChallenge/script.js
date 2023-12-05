function getJoke() {
	// Set up XHR object
	const xhr = new XMLHttpRequest();

	// Connect to Chuck Norris joke API
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

	// Grab the joke and display on page
	xhr.onreadystatechange = function() {
		const div = document.querySelector('#joke');

		if (this.readyState === 4 && this.status === 200) {
			const data = JSON.parse(this.responseText);
			div.textContent = data.value;
		} else {
			div.textContent = 'Something went wrong! (Not funny)';
		}
	};

	xhr.send();
}

document.querySelector('#joke-btn').addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);