var mongodb=require('mongodb')

function getDbCon(res,cb) {
    //Local Mongo url
    //const url = 'mongodb://localhost:27017'
    
    //CloudMongo URL
    const url='mongodb+srv://nazeermongo:MongoCloud123!@cluster0.fe0flxq.mongodb.net/?retryWrites=true&w=majority'
    var mongoclient = mongodb.MongoClient
    mongoclient.connect(url)
        .then(function (server) {
            var db = server.db('School')
            cb(db)
        })
        .catch(function (err) {
            console.log(err)
            res.send(err)
        })
}

module.exports=getDbCon