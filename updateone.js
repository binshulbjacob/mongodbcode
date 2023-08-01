var MongoClient=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect( url,function(err,db){
    if(err) throw err
    var dbo=db.db("mydb");
    var myquery={address:'binshul villa'};
    var newvalues={$set:{address:"villa"}};
    dbo.collection("customers").updateOne(myquery,newvalues,function(err,res){
        if (err) throw err;
        console.log(res.result.nModified+"document(s) updated");
        db.close();

    });


});


