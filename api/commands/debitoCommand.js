class DebitoCommand {
    constructor(accountList, accountId, value) {
        this.accountList = accountList;
        this.accountId = accountId;
        this.value = value;
    }

    execute() {
        let account = this.accountList.find(account => {
            return account.id == this.accountId;
        });
        
        if (account) {
            if (parseInt(this.value) > 0) {
                console.log("Debitando " + this.value + " da conta " + this.accountId + "...");
                account.balance = parseInt(account.balance) - parseInt(this.value);
                return true;
            } else {
                console.log("Erro debitando na conta " + this.accountId + ". Valor não positivo");
                return false;
            }
        } else {
            console.log("Erro debitando da conta " + this.accountId + ". Conta inexistente");
            return false;
        }
    }
}

module.exports = DebitoCommand;