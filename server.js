var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// init express application
var app = express();
app.use(bodyParser.json());
app.use(cors());

var nodeadmin=require('nodeadmin');
app.use(nodeadmin(app));

app.listen(process.env.PORT);

