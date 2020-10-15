const saldoCommand = require('../commands/saldoCommand.js');
const creditoCommand = require('../commands/creditoCommand');

test('test credito command happy path', () =>{
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

    expect(new creditoCommand(accounts, "2", 10).execute()).toBe(true);
    expect(new saldoCommand(accounts, "2").execute()).toBe(110);
});

test('test credito command fail negative value', () =>{
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

    expect(new creditoCommand(accounts, "2", -10).execute()).toBe(false);
});

test('test credito command fail account doesnt exist', () =>{
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

    expect(new creditoCommand(accounts, "4", 10).execute()).toBe(false);
});