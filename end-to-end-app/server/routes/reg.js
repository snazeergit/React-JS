var express = require('express')
var router = express.Router()
var mongodb = require('mongodb')

//http://localhost:2020/reg/get-std, get
router.get("/get-std", function (req, res, next) {
    res.send('get-std endpoint is working GET')
})

//http://localhost:2020/reg/reg-std, post
router.post("/reg-std", function (req, res, next) {
    //extract data from request
    var data = req.body.payload
    //connect to database
    var url = "mongodb://localhost:27017"
    var mongoClient = mongodb.MongoClient

    /*
    mongoClient.connect(url, function (err, server) {
        if (err) {
            res.send('DB Connection error...')
        } else {
            var db = server.db('School')
            var collection = db.collection("Students")
            collection.insertOne(data, function (e, s) {
                if (e) {
                    res.send(e)
                } else {
                    res.send(s)
                }
            })
        }
    })
    */

    mongoClient.connect(url)
        .then((server) => {
            var db = server.db("School")
            var collection = db.collection("Students")
            collection.insertOne(data)
                .then((s) => {
                    res.send(s)
                })
                .catch((e) => {
                    res.send(e)
                })
        })
        .catch((err) => {
            res.send("DB Connection error...")
        })
})

module.exports = router;