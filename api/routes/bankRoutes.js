'use strict';
module.exports = function(app) {
  var bank = require('../controllers/bankController');

  app.route('/saldo/:accountId')
    .get(bank.saldo);

  app.route('/credito/:accountId/:value')
    .put(bank.credito);

  app.route('/debito/:accountId/:value')
    .get(bank.debito);

  app.route('/transferencia/:accountIdFrom/:accountIdTo/:value')
    .put(bank.transferencia);
};