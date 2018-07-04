var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var https = require("https");
var counter = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.post("/",function(req,res){
        var filename = `image_${counter}`;
        var file = fs.createWriteStream(`${__dirname}/uploads/${filename}.jpg`);
        counter += 1;
        https.get(`${req.body.url}`, resp=>{
        https.get(resp.headers.location, response => {
                response.pipe(file);
                res.render('success', {filename:filename});
            })
        });
        
})

module.exports = router;
