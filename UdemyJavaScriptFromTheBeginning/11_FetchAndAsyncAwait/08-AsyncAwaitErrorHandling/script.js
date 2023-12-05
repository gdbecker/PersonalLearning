// Handling all errors inside the same function
const getUsers = async () => {
	try {
		// const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const res = await fetch('http://httpstat.us/404');

		if (!res.ok) {
			throw new Error('Request Failed');
		}

		const data = await res.json();

		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

getUsers();

// Handling errors with .catch()
const getPosts = async () => {
	// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const res = await fetch('http://httpstat.us/500');

	if (!res.ok) {
		throw new Error('Request Failed');
	}

	// const data = await res.json();
	const data = await res.text();

	console.log(data);
}

getPosts().catch(error => console.log(error));