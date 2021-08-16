
var express = require("express")
var fs1 = require("fs")
var app = express()
// add http server
// -----------------------
// YOUR CODE

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
var bodyParser = require('body-parser')

// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"))

fs1.writeFile("./new.txt", "UTF-8",()=>console.log("helllo"))
fs1.readFile("new.txt","utf8",(err,data)=>{
    console.log(data)
})

// init the data store
db.defaults({ users: []}).write();



// list posts
app.get('/data', function(req, res){     

    // YOUR CODE
    res.send(db.get("users").value())

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});


app.listen(3000, ()=>{
    console.log("3000")
})
// start server
// -----------------------
// YOUR CODE
