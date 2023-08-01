var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    {_id:'1', product: 'choclate',},
    {_id:'2', product: 'biriyani', },
    {_id:'3' ,product: 'icecream',},
    {_id:'4' ,product: 'cakes',},
    {_id:'5', product: 'biscuit', },
  ];
  dbo.collection("product").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Documents inserted");
    db.close();
  });
});