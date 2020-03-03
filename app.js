// Gets the libraries and frameworks
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const controller = require("./controller");

// Creates the port
app.listen(3000, function() {
    console.log("server running on port 3000");
})

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log("Started!");
    // req.body is the attribute that contains the information of the req object
    res.send(new controller().returnFinalString(req.body));
    console.log("Ended!");
});

app.get('/', (req, res) => {
    res.send(console.log("teste"));
});

// POSTMAN.