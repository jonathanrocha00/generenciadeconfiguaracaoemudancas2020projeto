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

        if (accountFrom && accountTo) {
            console.log("Transferindo " + this.value + " da conta " + this.accountIdFrom + " para a conta " + this.accountIdTo + "...");
            accountFrom.balance = parseInt(accountFrom.balance) - parseInt(this.value);
            accountTo.balance = parseInt(accountTo.balance) + parseInt(this.value);
            return true;
        } else {
            console.log("Erro Transferindo " + this.value + " da conta " + this.accountIdFrom + " para a conta " + this.accountIdTo + ". Uma, ou ambas, contas são inexistentes");
            return false;
        }
        
    }
}

module.exports = TransferenciaCommand;