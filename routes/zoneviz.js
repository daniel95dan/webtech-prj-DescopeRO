var models  = require('../models');
var express = require('express');
var router  = express.Router();

var zoneviz = models.Zoneviz;

// create an zonaviz
router.post('/Zoneviz', function(request,response) {
  zoneviz.create(request.body).then(function(Zonaviz) {
      zoneviz.findById(Zonaviz.id).then(function(Zonaviz) {
          response.status(201).send(Zonaviz);
      });
  });
});

// returns all Zoneviz
router.get('/Zoneviz', function(request,response){
     /*global zonaviz*/
    zoneviz.findAll().then(function(Zoneviz){
        response.status(200).send(Zoneviz);
    });
});

// returns one zonaviz by id
router.get('/Zoneviz/:id', function(request,response){
    zoneviz.findById(request.params.id).then(function(zoneviz){
        if(zoneviz) {
            response.status(200).send(zoneviz);
        } else {
            response.status(404).send();
        }
    });
});

// update a specific zonaviz by id
router.put('/Zoneviz/:id', function(request,response){
    zoneviz
        .findById(request.params.id)
        .then(function(zoneviz){
            if(zoneviz) {
                zoneviz
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

// delete 
router.delete('/Zoneviz/:id', function(req,res){
    zoneviz
        .findById(req.params.id)
        .then(function(zoneviz){
            if(zoneviz) {
                zoneviz
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