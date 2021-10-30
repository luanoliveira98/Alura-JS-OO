import {Customer} from './Customer.js';
import {CheckingAccount} from './CheckingAccount.js';

const customer1 = new Customer();
customer1.name = "Luan";
customer1.cpf = 11122233309;

const customer2 = new Customer();
customer2.name = "Alice";
customer2.cpf = 88822233309;

const account1 = new CheckingAccount();
account1.agency = 1001;
account1.customer = customer1;
account1.deposit(500);

const account2 = new CheckingAccount();
account2.agency = 1001;
account2.customer = customer2;

account1.transfer(200, account2);

console.log(account1);
console.log(account2);