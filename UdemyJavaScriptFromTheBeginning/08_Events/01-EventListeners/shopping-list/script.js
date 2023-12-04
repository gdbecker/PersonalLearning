const clearBtn = document.querySelector('#clear');
const items = document.querySelectorAll('li');

function onClear() {
	alert('Clear items');
}

// JS event listener
// clearBtn.onclick = function() {
// 	alert('Clear items');
// };

// Recommended method
// addEventListener()
// can have as many results as you want for a single event
// clearBtn.addEventListener('click', () => alert('Clear items')); // blocking operation
clearBtn.addEventListener('click', () => console.log('Clear items'));
clearBtn.addEventListener('click', onClear);

setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

// practice removing all the items after 5 seconds
console.log(items);
setTimeout(() => {
	items.forEach(i => i.remove())
}, 5000);









