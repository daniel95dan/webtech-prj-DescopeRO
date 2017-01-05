var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var models  = require('../models');

var Zona = models.zona;

// init express application
var app = express();
app.use(bodyParser.json());
app.use(cors());



var nodeadmin=require('nodeadmin');
app.use(nodeadmin(app));

app.listen(process.env.PORT);

