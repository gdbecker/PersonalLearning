// * indicates it's a generator
function* createTeamIterator(teams) {
	for (let i = 0; i < teams.length; i++) {
		yield teams[i]; // pauses the function here
	}
}

const teams = ['Red Sox', 'Astros', 'Dodgers', 'Rangers'];

const iterator = createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const team of createTeamIterator(teams)) {
	console.log(team);
}

console.log([...createTeamIterator(teams)]);

const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);