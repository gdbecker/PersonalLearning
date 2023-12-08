class Queue {
	constructor() {
		this._items = [];
		this._count = 0;
		this._front = 0;
	}

	enqueue(item) {
		this._items[this._count] = item;
		this._count++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}

		const item = this._items[this._front];

		for (let i = this._front; i < this._count - 1; i++) {
			this._items[i] = this._items[i + 1]; // shifting to the left
		}

		this._count--;
		this._items.length = this._count;
	}

	isEmpty() {
		return this._count === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return 'No items in the queue';
		}

		return this._items[this._front];
	}

	length() {
		return this._count - this._front;
	}
}

const q = new Queue();

q.enqueue('Item 1');
q.enqueue('Item 2');
q.enqueue('Item 3');
console.log('Front item: ' + q.peek());
console.log('Queue length: ' + q.length());

q.dequeue();
console.log('Front item: ' + q.peek());
console.log('Queue length: ' + q.length());

q.dequeue();
console.log('Front item: ' + q.peek());
console.log('Queue length: ' + q.length());