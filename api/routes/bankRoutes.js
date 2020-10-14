'use strict';
module.exports = function(app) {
  var bank = require('../controllers/bankController');

  app.route('/saldo/:accountId')
    .get(bank.saldo);

  app.route('/credito/:accountId/:value')
    .put(bank.credito);

  app.route('/debito/:accountId/:value')
    .put(bank.debito);

  app.route('/transferencia/:accountId1/:accountId2/:value')
    .put(bank.transferencia);
};