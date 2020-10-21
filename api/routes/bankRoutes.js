'use strict';
module.exports = function(app) {
  var bank = require('../controllers/bankController');

  app.route('/saldo/')
    .get(bank.saldo);

  app.route('/credito/')
    .get(bank.credito);

  app.route('/debito/')
    .get(bank.debito);

  app.route('/transferencia/:accountIdFrom/:accountIdTo/:value')
    .get(bank.transferencia);
};