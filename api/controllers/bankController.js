'use strict';


var mongoose = require('mongoose'),
  Account = mongoose.model('Accounts');

exports.saldo = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};