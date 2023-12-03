// forEach loops through, it doesn't return anything
const socials = ['twitter', 'instagram', 'linkedin', 'facebook'];

// Show properties and methods available for something
console.log(socials.__proto__);

socials.forEach(function (item) {
	console.log(item);
});

console.log('--------------------');

socials.forEach((item) => console.log(item));

console.log('--------------------');

socials.forEach((item, index, arr) => console.log(`${index} - ${item}, ${arr}`));

console.log('--------------------');

function logSocials(social) {
	console.log(social);
}

socials.forEach(logSocials);

console.log('--------------------');

const socialObjects = [
	{
		name: 'twitter',
		url: 'https://twitter.com'
	},
	{
		name: 'facebook',
		url: 'https://facebook.com'
	},
	{
		name: 'linkedin',
		url: 'https://linkedin.com'
	},
	{
		name: 'instagram',
		url: 'https://instagram.com'
	}
]

socialObjects.forEach(logSocials);

