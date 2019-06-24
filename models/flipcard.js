const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var monk = require('monk');
var db = monk('localhost:27017/examdb');
var flips= db.get('flipcard');


module.exports={
  getQuestionByCousreCode: function(err,docs) {
  var result =flips.find().toArray(function(err, docs)

    console.log(result)
  }
}