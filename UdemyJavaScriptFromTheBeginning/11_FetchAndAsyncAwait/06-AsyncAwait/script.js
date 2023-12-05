// A lot of developers use async await instead of .then

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'Jon', age: 35 });
	}, 1000);
});

// promise.then(data => console.log(data));

// Async await syntax
async function getPromise() {
	const response = await promise;
	console.log(response);
}

// getPromise();

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log(data);
}

// getUsers();

const getPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	console.log(data);
}

getPosts();