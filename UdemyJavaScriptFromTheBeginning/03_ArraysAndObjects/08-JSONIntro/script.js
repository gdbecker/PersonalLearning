const post = {
	id: 1,
	title: 'Post One',
	body: 'This is the body'
};

// Convert to JSON string
// Usually what you send to a server for POST request
const str = JSON.stringify(post);
console.log(str);

// Parse JSON
const obj = JSON.parse(str);

const posts = [
	{
		id: 1,
		title: 'Post One',
		body: 'This is the body'
	},
	{
		id: 2,
		title: 'Post Two',
		body: 'This is the body'
	}
];

const str2 = JSON.stringify(posts);

console.log(str2);