// Promises are asynchronous and non-blocking
const promise = new Promise((resolve, reject) => {
	// Do some async task
	setTimeout(() => {
		console.log('Async task complete');
		resolve();
	}, 1000);
});

// Handling the promise
promise.then(() => {
	console.log('Promise consumed');
});

console.log('Hello from global scope'); // this is printed first because promises are asynchronous

const getUser = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;

		if (!error) {
			resolve({ name: 'John', age: 30 });
		} else {
			reject('Error: something went wrong');
		}
		
	}, 1000);
});

// .then(user) is referring to what's inside of resolve
// .catch(error) is referring to what's inside of reject
// .finally() will run regardless
getUser
.then((user) => { 
	console.log(user);
})
.catch((error) => {
	console.log(error);
})
.finally(() => {
	console.log('This promise has been resolved or rejected');
})



