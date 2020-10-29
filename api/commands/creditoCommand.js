class CreditoCommand {
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
                console.log("Depositando " + this.value + " na conta " + this.accountId + "...");
                account.balance = parseFloat(account.balance) + parseFloat(this.value);
                account.bonus = parseFloat(account.bonus) + (parseFloat(this.value) / 100);
                return true;
            } else {
                console.log("Erro depositando na conta " + this.accountId + ". Valor não positivo");
                return false;
            }
        }  else {
            console.log("Erro depositando na conta " + this.accountId + ". Conta inexistente");
            return false;
        }
        
    }
}

module.exports = CreditoCommand;