// Calculator Challenge

function calculator(num1, num2, operator) {
	switch (operator) {
		case '+':
			return num1 + num2;
			break;
		case '-':
			return num1 - num2;
			break;
		case '*':
			return num1 * num2;
			break;
		case '/':
			return num1 / num2;
			break;
		default:
			return 'ERROR: INVALID OPERATOR';
	}
}

console.log(calculator(1, 5, '+'));
console.log(calculator(1, 5, '-'));
console.log(calculator(1, 5, '*'));
console.log(calculator(1, 5, '/'));
console.log(calculator(1, 5, '%'));