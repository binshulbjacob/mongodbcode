var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    var dbo=db.db("mydb");
    dbo.collection('user').aggregate([
        {$lookup:
            {
                from:'product',
                localField:'favourite_product',
                foreignField:'_id',
                as:'orderdetails'
            }
        }

    ]).toArray(function(err,res){
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();

    });



});