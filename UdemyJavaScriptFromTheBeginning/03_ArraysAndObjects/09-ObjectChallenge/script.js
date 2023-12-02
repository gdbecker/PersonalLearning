// Object Challenge

// Step 1
const book1 = {
	title: 'Book 1',
	author: 'Author 1',
	status: {
		own: true,
		reading: false,
		read: false
	}
};

const book2 = {
	title: 'Book 2',
	author: 'Author 2',
	status: {
		own: true,
		reading: false,
		read: false
	}
};

const book3 = {
	title: 'Book 3',
	author: 'Author 3',
	status: {
		own: true,
		reading: false,
		read: false
	}
};

const library = [book1, book2, book3];

// Step 2
book1.status.read = true;
book2.status.read = true;
book3.status.read = true;

// Step 3
let {
	title: firstBook
} = library[0];

// Step 4
const str = JSON.stringify(library);
console.log(str);