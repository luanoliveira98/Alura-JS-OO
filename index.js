import {Customer} from './Customer.js';
import {CheckingAccount} from './CheckingAccount.js';

const customer1 = new Customer("Luan", 11122233309);
const account1 = new CheckingAccount(1001, customer1);
account1.deposit(500);

const customer2 = new Customer("Alice", 88822233309);
const account2 = new CheckingAccount(1001, customer2);

account1.transfer(200, account2);

console.log(account1);
console.log(account2);
console.log(CheckingAccount.numberOfAccounts);