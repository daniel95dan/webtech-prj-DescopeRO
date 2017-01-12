var models  = require('../models');
var express = require('express');
var router  = express.Router();

var zona = models.Zona;

// create an zona
router.post('/Zona', function(request,response) {
  zona.create(request.body).then(function(Zona) {
      zona.findById(Zona.id).then(function(Zona) {
          response.status(201).send(Zona);
      });
  });
});

// returns all Zona
router.get('/Zona', function(request,response){
     /*global zona*/
    zona.findAll().then(function(Zona){
        response.status(200).send(Zona);
    });
});

// returns one zona by id
router.get('/Zona/:id', function(request,response){
    zona.findById(request.params.id).then(function(zona){
        if(zona) {
            response.status(200).send(zona);
        } else {
            response.status(404).send();
        }
    });
});

// update a specific zona by id
router.put('/Zona/:id', function(request,response){
    zona
        .findById(request.params.id)
        .then(function(zona){
            if(zona) {
                zona
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

// delete an zona by id
router.delete('/Zona/:id', function(req,res){
    zona
        .findById(req.params.id)
        .then(function(zona){
            if(zona) {
                zona
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