var express     = require('express');

var router      = express.Router();

var mongodb     = require('mongodb');

var MongoClient = mongodb.MongoClient;

var dburl = "mongodb://localhost:27017/examdb";

// ===============================================================
//   GET CONTROLLERS
// ===============================================================

// GET A CARD
router.get('/card', function(req, res, next) {

  MongoClient.connect(dburl, function(err, db) {

    if(err) {  console.log(err); throw err;  }

    data = '';

    db.collection('flipcard').find().toArray(function(err, docs){

      if(err) throw err;
      console.log(data)
      res.render('students/flipcard', {data: docs});

      db.close();

    });

  });

});


module.exports=router;