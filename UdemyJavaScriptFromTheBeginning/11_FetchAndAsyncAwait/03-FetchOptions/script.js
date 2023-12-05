function createPost({ title, body }) {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title,
			body
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => console.log(data));
}

createPost({ title: 'myPost', body: 'this is my post' });