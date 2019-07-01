var express     = require('express');

var router      = express.Router();

var mongodb     = require('mongodb');

var MongoClient = mongodb.MongoClient;

//const uri = "mongodb://ireoluwa:ireoluwa96.@cluster0-shard-00-00-n5xjl.mongodb.net:27017,cluster0-shard-00-01-n5xjl.mongodb.net:27017,cluster0-shard-00-02-n5xjl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

//const client =new MongoClient(uri,{useNewUrlParser :true})


var dburl = "mongodb://localhost:27017/examdb";

// ===============================================================
//   GET CONTROLLERS
// ===============================================================

// GET A CARD
router.get('/card', function(req, res) {

  MongoClient.connect(dburl,function(err, db)
  {

    if(err) {  console.log(err); throw err;  }

    data = '';
    //const collections =client.db("examdb").collection("flipcard");

    db.collection('flipcard').find().toArray(function(err, docs)
    {
        if(err) throw err;
        console.log(data)
        res.render('students/flipcard', {data: docs});

      db.close();

    });

  });

});


module.exports=router;