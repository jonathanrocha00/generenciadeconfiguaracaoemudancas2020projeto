const saldoCommand = require('../commands/saldoCommand.js');

test('test saldo command happy path', () =>{
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

    expect(new saldoCommand(accounts, "2").execute()).toBe("100");
});

test('test saldo command fail', () =>{
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

    expect(new saldoCommand(accounts, "6").execute()).toBe(false);
});