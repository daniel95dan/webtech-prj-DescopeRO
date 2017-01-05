var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Zona = models.zona;

// create an article
router.post('/zona', function(request,response) {
  Zona.create(request.body).then(function(Zona) {
      Zona.findById(Zona.id).then(function(Zona) {
          response.status(201).send(Zona);
      });
  });
});

// returns all articles
router.get('/zona', function(request,response){
     /*global Article*/
    Article.findAll().then(function(Zona){
        response.status(200).send(Zona);
    });
});

// returns one article by id
router.get('/Zona/:id', function(request,response){
    Zona.findById(request.params.id).then(function(Zona){
        if(Zona) {
            response.status(200).send(Zona);
        } else {
            response.status(404).send();
        }
    });
});

// update a specific article by id
router.put('/Zona/:id', function(request,response){
    Zona
        .findById(request.params.id)
        .then(function(Zona){
            if(Zona) {
                article
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(202).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

// delete an article by id
router.delete('/Zona/:id', function(req,res){
    Zona
        .findById(req.params.id)
        .then(function(Zona){
            if(Zona) {
                Zona
                    .destroy()
                    .then(function(){
                        res.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        res.status(400).send('server error');
                    });
            } else {
                res.status(404).send();
            }
        });
});

module.exports = router;