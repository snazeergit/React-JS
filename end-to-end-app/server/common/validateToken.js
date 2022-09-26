const { response } = require('express')
var jwt=require('jsonwebtoken')

function validateToken(req, res, next) {
    //client sending the token
    var token = req.headers.authorization

    if (token) {
        jwt.verify(token, 'appToken',function(error, success){
            //if invalid token is provided
            if(error){
                res.send("Invalid token...")
            }else{
                next()
            }
        })
    }
    //if client doesn't provide token
    else {
        res.send("Token missing...!")
    }
}
module.exports = validateToken;