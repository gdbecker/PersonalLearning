// Map does return something
const numbers = [10, 20, 30, 40, 67, 91, 8, 3, 1];

const doubledNumbers = numbers.map(n => n * 2);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach(n => {
	doubledNumbers2.push(n * 2);
});

console.log(doubledNumbers2);

const companies = [
	{ name: 'Company 1', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company 2', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company 3', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company 4', category: 'Tech', start: 1989, end: 2010 },
	{ name: 'Company 5', category: 'Tech', start: 2009, end: 2022 },
	{ name: 'Company 6', category: 'Retail', start: 2011, end: 2020 },
	{ name: 'Company 7', category: 'Auto', start: 1984, end: 2004 }
]

// Create an array of company names
const companyNames = companies.map(c => c.name);
console.log(companyNames);

// Create an array with just name and category
const companyInfo = companies.map(c => {
	return {
		name: c.name,
		category: c.category
	}
});
console.log(companyInfo);

// Create an array of objects of company names and lengths in years
const companyDetail = companies.map(c => {
	return {
		name: c.name,
		yearLength: c.end - c.start
	}
});
console.log(companyDetail);

// Chain map methods
const squareAndDouble = numbers
	.map(n => Math.sqrt(n))
	.map(n => n * 2);
console.log(squareAndDouble);

// Chaining different methods
const evenDoubled = numbers
	.filter(n => n % 2 === 0)
	.map(n => n * 2);
console.log(evenDoubled);