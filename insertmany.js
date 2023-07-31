var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'Rahul', address: 'Rahul Bhavan'},
    { name: 'Manu', address: 'Manu Villa'},
    { name: 'Vishnu', address: 'Vishnu Bhavan'},
    { name: 'Akash', address: 'Akash Villa'},
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Documents inserted");
    db.close();
  });
});