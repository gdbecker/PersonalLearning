// script tags at the beginning of the HTML are run before the page is loaded
// so if you reference elements before they load you'll get error/undefined

// Ways to remedy

// one  
// window.onload = function () {
// 	document.querySelector('h1').textContent = 'Hello World';
// }

// two: 'load' waits for the entire page to load including assets and resources
window.addEventListener('load', () => {
	console.log('Page loaded');
})

// three: 'DOMContentLoaded' loads as soon as the DOM is parsed
window.addEventListener('DOMContentLoaded', () => {
	console.log('DOM loaded');
})

console.log('run me, I"m first'); // not waiting for any listener to trigger

window.addEventListener('resize', () => {
	document.querySelector('h1').textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

window.addEventListener('scroll', () => {
	console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

	if (window.scrollY > 70) {
		document.body.style.backgroundColor = 'purple';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
});

window.addEventListener('focus', () => {
	document.querySelectorAll('p').forEach(p => {
		p.style.color = 'blue';
	})
})

window.addEventListener('blur', () => {
	document.querySelectorAll('p').forEach(p => {
		p.style.color = 'black';
	})
})

