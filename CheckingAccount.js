import { Customer } from "./Customer.js";

export class CheckingAccount {
    static numberOfAccounts = 0;    

    agency;

    // #balance = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _customer;
    _balance = 0;

    set customer(newValue) {
        if (!newValue instanceof Customer) return;
        this._customer = newValue;
    }

    get customer() {
        return this._customer;
    }

    get balance() {
        return this._balance;
    }

    constructor(agency, customer) {
        this.agency = agency;
        this.customer = customer;
        CheckingAccount.numberOfAccounts += 1;
    }

    deposit(value) {
        if (value <= 0) return;
        this._balance += value;
        return value;
    }

    withdraw(value) {
        if (this._balance < value || value <= 0) return;
        this._balance -= value;
        return value;
    }

    transfer(value, account) {
        const valueWithdraw = this.withdraw(value);
        account.deposit(valueWithdraw);
    }
}