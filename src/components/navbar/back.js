var express = require("express");
var app = express();
var port = 3000;

//fetch the data from post request which will come in body variable
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/hello.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.firstName=req.body.firstName;
    myData.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});