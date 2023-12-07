class Wallet {
	constructor() {
		// adding an underscore is the previous convention to indicate it's a private property
		// it doesn't actually make it private but tells the developer to write code that way
		this._balance = 0; 
		this._transactions = [];
	}

	deposit(amount) {
		this._processDeposit(amount);
		this._balance += amount;
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log('Not enough funds');
			return;
		}
		
		this._processWithdraw(amount);
		this._balance -= amount;
	}

	// Indicating a private method
	_processDeposit(amount) {
		console.log(`Depositing ${amount}`);
		this._transactions.push({
			type: 'deposit',
			amount
		})
	}

	// Indicating a private method
	_processWithdraw(amount) {
		console.log(`Withdrawing ${amount}`);
		this._transactions.push({
			type: 'withdraw',
			amount
		})
	}

	get balance() {
		return this._balance;
	}

	get transactions() {
		return this._transactions;
	}
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(500);

console.log(wallet.balance);
console.log(wallet.transactions);