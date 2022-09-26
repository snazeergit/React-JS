var express = require('express')
var router = express.Router()
var mongodb = require('mongodb');
var getDbCon = require('../common/getDbCon');
var validateToken= require('../common/validateToken');
var jwt=require('jsonwebtoken')


//Local Mongo url
//const url = 'mongodb://localhost:27017'

//CloudMongo URL
const url='mongodb+srv://nazeermongo:MongoCloud123!@cluster0.fe0flxq.mongodb.net/?retryWrites=true&w=majority'

//http:localhost:2020/dbops/insert-std, post
router.post("/insert-std", function (req, res, next) {
    var data = req.body.payload
    var mongoclient = mongodb.MongoClient
    mongoclient.connect(url, function (err, server) {
        if (err) {
            res.send("Error in database connection....!")
        } else {
            var db = server.db("School")
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
})

//http://localhost:2020/dbops/getall, get
router.get('/getall', function (req, res, next) {
    var mongoclient = mongodb.MongoClient
    mongoclient.connect(url)
        .then(function (server) {
            var db = server.db('School')
            var collection = db.collection('Students')
            collection.find().toArray()
                .then(function (data) {
                    res.send(data)
                })
        })
        .catch(function (err) {
            res.send(err)
        })

})

//http://localhost:2020/dbops/get-stu-id, get
router.get('/get-stu-id', validateToken , function (req, res, next) {
    var id = mongodb.ObjectId(req.query.id)
    getDbCon(res, function (db) {
        var collection = db.collection('Students')
        collection.findOne({ '_id': id })
            .then(function (result) {
                res.send(result)
            })
            .catch(function (err) {
                res.send(err)
            })
    })
})

//http://localhost:2020/dbops/auth, post
router.post("/auth",function (req, res, next) {
    var data = req.body.payload
    getDbCon(res, function (db) {
        var collection = db.collection('Students')
        collection.findOne(data)
            .then(function (result) {
                if(result){
                    var token=jwt.sign(data,'appToken')
                    result.token=token
                }
                res.send(result)
            })
            .catch(function (err) {
                res.send(err)
            })
    })

})

//http://localhost:2020/dbops/update-stu, put
router.put("/update-stu", validateToken,function (req, res, next) {
    var id = mongodb.ObjectId(req.query.id)
    var data = req.body.payload

    getDbCon(res, function (db) {
        var collection = db.collection("Students")
        collection.updateOne({ _id: id }, { $set: data })
        .then(function (result) {
            res.send(result)
        })
        .catch(function (result) {
            res.send(result)
        })
    })

})

//http://localhost:2020/dbops/delete-stu, delete
router.delete("/delete-stu", validateToken ,function (req, res, next) {
    var id = mongodb.ObjectId(req.query.id)
    getDbCon(res, function (db) {
        var collection = db.collection("Students")
        collection.deleteOne({ _id: id })
        .then(function (result) {
            res.send(result)
        })
        .catch(function (result) {
            res.send(result)
        })
    })

})

module.exports = router;