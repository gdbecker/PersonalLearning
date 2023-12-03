// Break
for (let i = 0; i <= 20; i++) {
	if (i === 15) {
		console.log('Breaking');
		break
	} else {
		console.log(i);
	}
}

// Continue
for (let u = 0; u <= 20; u++) {
	if (u === 13) {
		console.log('Skipping 13');
		continue;
	}
	console.log(u);
}