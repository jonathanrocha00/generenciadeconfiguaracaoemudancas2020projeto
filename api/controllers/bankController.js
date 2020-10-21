'use strict';
const saldoCommand = require('../commands/saldoCommand.js');
const creditoCommand = require('../commands/creditoCommand.js');
const debitoCommand = require('../commands/debitoCommand.js');
const transferenciaCommand = require('../commands/transferenciaCommand.js');
let accounts = require('../data/data.js');

exports.saldo = function(req, res) {
  const saldo = new saldoCommand(accounts, req.query.accountId).execute();
  res.json(parseInt(saldo));
};

exports.credito = function(req, res) {
  const result = new creditoCommand(accounts, req.query.accountId, req.query.value).execute();
  res.json(result);
};

exports.debito = function(req, res) {
  const result = new debitoCommand(accounts, req.query.accountId, req.query.value).execute();
  res.json(result);
};

exports.transferencia = function(req, res) {
  const result = new transferenciaCommand(accounts, req.params.accountIdFrom, req.params.accountIdTo, req.params.value).execute();
  res.json(result);
};