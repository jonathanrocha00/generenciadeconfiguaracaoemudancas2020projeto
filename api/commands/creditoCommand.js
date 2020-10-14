class CreditoCommand {
    constructor(accountList, accountId, value) {
        this.accountList = accountList;
        this.accountId = accountId;
        this.value = value;
    }

    execute() {
        let account = this.accountList.find(account => {
            return account.id == this.accountId;
        })

        console.log("Creditando " + this.value + " na conta " + this.accountId + "...");

        account.balance = parseInt(account.balance) + parseInt(this.value);

        return true;
    }
}

module.exports = CreditoCommand;