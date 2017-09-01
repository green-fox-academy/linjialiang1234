'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
function account(para){
	for(var i = 0; i < para.length; i++){
		console.log(para[i].client_name + " has the balance of " + para[i].balance +".");
	}
}
account(accounts);

function transfer(from_account_number, to_account_number, balance){
	console.log("Account number: " + from_account_number + " transfer " + balance + " to account number: " + to_account_number + "." );
	var from_account_balance = 0;
	var to_account_balance = 0;
	for(var i = 0; i < accounts.length; i++){
		if(accounts[i].account_number === from_account_number){
			from_account_balance = accounts[i].balance -= balance;
		}
		if(accounts[i].account_number === to_account_number){
			to_account_balance = accounts[i].balance += balance;
		}
	}

	if(from_account_balance === 0 || to_account_balance === 0) {
			return console.log('404 - account not found');
		}
	console.log("After transfered, account number: " + from_account_number + " has balance of " + from_account_balance + ".");
	console.log("Account number: " + to_account_number + " has balance of " + to_account_balance + ".");
}

transfer(23456311, 43546731, 10);

}
