var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('mydb');dbo.collection("customers").find({},{projection:{_id:0,name:1,address:1}}).toArray(function(err,result){

              if (err) throw err;
              console.log(result[3].address);
              db.close();
    });

});