var express = require("express");
var app = express();
var Sequelize = require("sequelize");
var path = require('path');
var bodyParser = require("body-parser");
var cors = require("cors");
var models  = require('./models');


app.use(bodyParser.json());
app.use(cors());

var Zoneviz = models.Zonaviz;
var zona = models.Zona;

app.use(require("./routes/zone.js"));
app.use(require("./routes/zoneviz.js"));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendfile(__dirname + "/public/index.html");
});

var nodeadmin=require('nodeadmin');
app.use(nodeadmin(app));

app.use(express.static('webtech-prj-descopero'));

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


var calator = sequelize.define('calator', {
  Nume: {
    type: Sequelize.STRING
  },
  Prenume: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'calator', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
});
calator.sync({}).then(function () {
 
  return calator.create({
    Nume: 'Doe',
    Prenume: 'John'
  });
});
calator.sync({}).then(function () {
  
  return calator.create({
    Nume: 'Ham',
    Prenume: 'Won'
  });
});
    var zoneviz = sequelize.define('Zoneviz', {
  Nume: {
    type: Sequelize.STRING
  },
  Perioada: {
    type: Sequelize.STRING
  },
  calatorId: {    type: Sequelize.INTEGER,
        references: {
            model: 'calator',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    }
}, {
  tableName: 'Zoneviz', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
});
zoneviz.sync({}).then(function () {
  // Table created
  return zoneviz.create({
    Nume: 'Bucovina',
    Perioada: '22.10',
    calatorId:'1'
  });
});




app.listen(process.env.PORT);





/*
zona.findById(1).then(function(zone) {
  console.log(zone)
})

app.get('js/main.js', function(req, res){
  res.sendfile(__dirname + "js"+"/"+"main.js");
});

app.get('css/main.css', function(req, res){
  res.sendfile(__dirname + "css"+"/"+"main.css");
});

app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.sendfile('public/index.html', {root: __dirname });
});


app.get('/hello',function(req,res){
  zona.findById(1).then(function(zone) {
  res.send(zone);
})

})
  */ 



