export class CheckingAccount {
    agency;
    customer;

    // #balance = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _balance = 0;

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