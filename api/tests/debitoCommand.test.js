const saldoCommand = require('../commands/saldoCommand.js');
const debitoCommand = require('../commands/debitoCommand');

test('test debito command happy path', () =>{
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

    expect(new debitoCommand(accounts, "2", 10).execute()).toBe(true);
    expect(new saldoCommand(accounts, "2").execute()).toBe(90);
});

test('test debito command fail negative value', () =>{
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

    expect(new debitoCommand(accounts, "2", -10).execute()).toBe(false);
});

test('test debito command fail account doesnt exist', () =>{
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

    expect(new debitoCommand(accounts, "4", 10).execute()).toBe(false);
});