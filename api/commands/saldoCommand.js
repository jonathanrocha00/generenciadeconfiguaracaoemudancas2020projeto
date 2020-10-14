class SaldoCommand {
    constructor(accountList, accountId) {
        this.accountList = accountList;
        this.accountId = accountId;
    }

    execute() {
        let account = this.accountList.find(account => {
            return account.id == this.accountId;
        })

        console.log("Consultando saldo da conta " + this.accountId + ": " + account.balance);

        return account.balance;
    }
}

module.exports = SaldoCommand;