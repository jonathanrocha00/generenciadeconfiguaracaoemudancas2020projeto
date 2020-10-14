class SaldoCommand {
    constructor(accountList, accountId) {
        this.accountList = accountList;
        this.accountId = accountId;
    }

    execute() {
        let account = this.accountList.find(account => {
            return account.id == this.accountId;
        })

        if (account) {
            console.log("Consultando saldo da conta " + this.accountId + ": " + account.balance);
            return account.balance;
        } else {
            console.log("Erro na consulta de saldo da conta " + this.accountId + "...");
            return false;
        }
        
    }
}

module.exports = SaldoCommand;