class TransferenciaCommand {
    constructor(accountList, accountIdFrom, accountIdTo, value) {
        this.accountList = accountList;
        this.accountIdFrom = accountIdFrom;
        this.accountIdTo = accountIdTo;
        this.value = value;
    }

    execute() {
        let accountFrom = this.accountList.find(account => {
            return account.id == this.accountIdFrom;
        });

        let accountTo = this.accountList.find(account => {
            return account.id == this.accountIdTo;
        })

        console.log("Transferindo " + this.value + " da conta " + this.accountIdFrom + " para a conta " + this.accountIdTo + "...");

        accountFrom.balance = parseInt(accountFrom.balance) - parseInt(this.value);
        accountTo.balance = parseInt(accountTo.balance) + parseInt(this.value);

        return true;
    }
}

module.exports = TransferenciaCommand;