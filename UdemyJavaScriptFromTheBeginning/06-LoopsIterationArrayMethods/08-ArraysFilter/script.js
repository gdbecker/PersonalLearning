// Filter does return something
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Longer way
const evenNumbers1 = numbers.filter(function (n) {
	return n % 2 === 0;
})

// Shorter way
const evenNumbers2 = numbers.filter(n => n % 2 === 0);

// Same with forEach
let evenNumbers3 = [];
numbers.forEach(n => {
	if (n % 2 === 0) {
		evenNumbers3.push(n);
	}
})

console.log(evenNumbers1);
console.log(evenNumbers2);
console.log(evenNumbers3);

const companies = [
	{ name: 'Company 1', category: 'Finance' },
	{ name: 'Company 2', category: 'Auto' },
	{ name: 'Company 3', category: 'Retail' },
	{ name: 'Company 4', category: 'Tech' },
	{ name: 'Company 5', category: 'Retail' },
	{ name: 'Company 6', category: 'Auto' },
	{ name: 'Company 7', category: 'Finance' }
]

// Get only Retail companies
const retailCompanies = companies.filter(c => c.category === 'Retail');
console.log(retailCompanies);