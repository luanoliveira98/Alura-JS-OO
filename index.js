class Customer {
    name;
    cpf;
}

class CheckingAccount {
    agency;
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
}

const customer1 = new Customer();
customer1.name = "Luan";
customer1.cpf = 11122233309;

const customer2 = new Customer();
customer2.name = "Alice";
customer2.cpf = 88822233309;

const checkingAccountLuan = new CheckingAccount();
checkingAccountLuan.agency = 1001;

checkingAccountLuan.deposit(200);
let withdrawnValue = checkingAccountLuan.withdraw(50);
console.log(withdrawnValue);

console.log(checkingAccountLuan);