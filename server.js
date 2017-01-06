var express = require("express");
//var bodyParser = require("body-parser");
//var cors = require("cors");

// init express application
var app = express();
//app.use(bodyParser.json());
//app.use(cors());
var Sequelize = require("sequelize");

var sequelize = new Sequelize('descoperodb', 'daniel95dan', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


var zona = sequelize.define('Zona',{denumire: Sequelize.TEXT},{timestamps: false,freezeTableName: true});

zona.findById(1).then(function(zone) {
  console.log(zone)
})

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/hello',function(req,res){
  zona.findById(1).then(function(zone) {
  res.send(zone);
})
   
})

var nodeadmin=require('nodeadmin');
app.use(nodeadmin(app));

//app.use(express.static('app'));

app.listen(process.env.PORT);


