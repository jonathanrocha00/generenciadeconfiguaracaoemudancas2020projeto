const saldoCommand = require('../commands/saldoCommand.js');
const transferenciaCommand = require('../commands/transferenciaCommand');

test('test transferencia command happy path', () =>{
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

    expect(new transferenciaCommand(accounts, "1", "2", 10).execute()).toBe(true);
    expect(new saldoCommand(accounts, "1").execute()).toBe(0);
    expect(new saldoCommand(accounts, "2").execute()).toBe(110);
});

test('test transferencia command fail accounts dont exist', () =>{
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

    expect(new transferenciaCommand(accounts, "1", "4", 10).execute()).toBe(false);
    expect(new saldoCommand(accounts, "1").execute()).toBe("10");
    expect(new saldoCommand(accounts, "2").execute()).toBe("100");
});