// V1
// const app = {
// 	nextIndex: 0,
// 	teams: ['Red Sox', 'Yankees', 'Rangers', 'Astros'],
// 	next() {
// 		if (this.nextIndex >= this.teams.length) {
// 			return { done: true }
// 		}

// 		const returnValue = { value: this.teams[this.nextIndex], done: false }
// 		this.nextIndex++;
// 		return returnValue;
// 	}
// }

// V1
// Manually hit the next() method to the end
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

// V2
const app = {
	teams: ['Red Sox', 'Yankees', 'Rangers', 'Astros'],
	[Symbol.iterator]: function () {
		let nextIndex = 0;
		return {
			next: () => {
				return nextIndex < this.teams.length
					? { value: this.teams[nextIndex++], done: false }
					: { done: true };
			}
		}
	}
}

// V2
// Manually hit the next() method to the end
const iterator = app[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// will not work with V1 of app
// now working with V2
for (const team of app) {
	console.log(team);
}

