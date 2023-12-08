class Node {
	constructor(value) {
		this._value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this._head = null;
		this._length = 0;
	}

	// Insert first node (Head)
	insertFirst(value) {
		const newNode = new Node(value);
		newNode.next = this._head;
		this._head = newNode;
		this._length++;
	}

	// Insert last node (Tail)
	insertLast(value) {
		const newNode = new Node(value);
		let current = this._head;

		while(current.next) {
			current = current.next;
		}

		current.next = newNode;
		this._length++;
	}

	// Insert at index
	insertAt(value, index) {
		if (index > this._length) {
			return;
		}

		if (index === 0) {
			this.insertFirst(value);
			return;
		}

		const newNode = new Node(value);
		let current, previous;
		current = this._head;
		let count = 0;

		while (count < index) {
			previous = current;
			current = current.next;
			count++;
		}

		newNode.next = current;
		previous.next = newNode;
		this._length++;
	}

	// Get at index
	getAt(index) {
		let current = this._head;
		let count = 0;

		while (current) {
			if (count === index) {
				console.log(current._value);
			}
			count++;
			current = current.next;
		}
		return null;
	}

	// Remove at index
	removeAt(index) {
		if (index > this._length) {
			return;
		}

		let current = this._head;
		let previous;
		let count = 0;

		if (index === 0) {
			this._head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this._length--;
	}

	// Print list data
	printListData() {
		let current = this._head;
		let list = '';

		while(current) {
			list += current._value + ' ';
			current = current.next;
		}

		console.log(list);
	}

	// Clear list
	clearList() {
		this._head = null;
		this.length = 0;
	}
}

const l = new LinkedList();

l.insertFirst(100);
l.insertFirst(200);
l.insertFirst(300);
l.printListData();

l.insertLast(50);
l.printListData();

l.insertAt(125, 2);
l.printListData();

l.getAt(1);
l.getAt(3);
l.printListData();

l.removeAt(2);
l.printListData();

l.clearList();
l.printListData();