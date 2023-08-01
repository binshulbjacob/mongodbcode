var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    {_id:'100', name: 'Rahul',  favourite_product 	: '2'},
    {_id:'101', name: 'Manu',  	favourite_product 	: '1'},
    {_id:'102' ,name: 'vishnu', favourite_product 	: '3'},
    {_id:'103' ,name: 'mahesh', favourite_product 	: '2'},
    {_id:'104', name: 'hari',  	favourite_product 	: '4'},
  ];
  dbo.collection("user").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Documents inserted");
    db.close();
  });
});