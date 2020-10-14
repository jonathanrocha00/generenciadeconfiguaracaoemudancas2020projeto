var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000

const saldoCommand = require('./api/commands/saldoCommand.js');
const creditoCommand = require('./api/commands/creditoCommand.js');
const debitoCommand = require('./api/commands/debitoCommand.js');
const transferenciaCommand = require('./api/commands/transferenciaCommand.js');
const executor = require('./api/executor/executor.js');

app.listen(port);

let accounts = [
    {
        id: "1",
        balance: "10"
    },
    {
        id: "2",
        balance: "100"
    },
    {
        id: "3",
        balance: "1000"
    },
];

let executorInstance = new executor();
let comandos = [
    new saldoCommand(accounts, "2"),
    new creditoCommand(accounts, "2", 10),
    new saldoCommand(accounts, "2"),
    new debitoCommand(accounts, "2", 50),
    new saldoCommand(accounts, "2"),
    new saldoCommand(accounts, "3"),
    new transferenciaCommand(accounts, "2", "3", 10),
    new saldoCommand(accounts, "2"),
    new saldoCommand(accounts, "3")
];

executorInstance.execute(comandos);