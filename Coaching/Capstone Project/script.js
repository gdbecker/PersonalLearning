const strengths = document.querySelectorAll('.strength-header');

strengths.forEach((strength, index) => {
	strength.addEventListener('click', () => {
		const up = strength.querySelector('#up');
		const down = strength.querySelector('#down');

		up.classList.toggle('hide-buttons');
		down.classList.toggle('hide-buttons');

		const statement = strength.nextElementSibling;
		statement.classList.toggle('hide-statement');
	});
});