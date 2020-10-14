'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AccountSchema = new Schema({
  accountId: {
    type: Number,
    required: 'Enter account ID'
  },
  balance: {
    type: Number,
    required: 'Enter balance'
  }
});

module.exports = mongoose.model('Accounts', AccountSchema);