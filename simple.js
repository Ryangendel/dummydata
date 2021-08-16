
var express = require("express")
var app = express()
var path = require("path")
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
var bodyParser = require('body-parser')
var fs1 = require("fs")

// init the data store
// ---------------------------
// YOUR CODE
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"))

db.defaults({ users: []}).write();

fs1.writeFile("./new.txt", "UTF-8",()=>console.log("helllo"))
fs1.readFile("new.txt","utf8",(err,data)=>{
    console.log(data)
})

app.get("/getuser", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/adduser.html'))
})
app.get("/getalluser", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/alluser.html'))
})

app.get("/data", (req, res)=>{
    res.send(db.get('users').value())
})

// add post
// ----------------------------
// YOUR CODE
app.post('/add', function(req, res){
    var user = {
        'name'          : req.body.name,
        'dob'           : req.body.dob,
        'email'         : req.body.email,
        'username'      : req.body.username,
        'password'      : req.body.password,
        'phone'         : req.body.phone,
        'streetaddress' : req.body.streetaddress,
        'citystatezip'  : req.body.citystatezip,
        'latitude'      : req.body.latitude,
        'longitude'     : req.body.longitude,
        'avatar'        : req.body.avatar
    }
    db.get('users').push(user).write();
    console.log(db.get('users').value());
    res.send(db.get('users').value());
});

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE

app.listen(PORT)