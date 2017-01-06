var express = require("express");
//var bodyParser = require("body-parser");
//var cors = require("cors");
//var models  = require('./models/zona');
//var Zona = models.zona;

// init express application
var app = express();
//app.use(bodyParser.json());
//app.use(cors());

app.use(express.static('webtech-prj-descopero'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/hello',function(req,res){
   res.send("Hello World!");
})
var nodeadmin=require('nodeadmin');
app.use(nodeadmin(app));

//app.use(require("./routes/zona.js"));
//app.use('/descoperadb', express.static('descoperadb'));
//app.use(express.static('app'));

app.listen(process.env.PORT);


