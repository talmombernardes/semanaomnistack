const express = require('express');

const ongController = require ('./controllers/ongController');
const incidentController = require('./controllers/incidentsControllers');
const profileController = require('./controllers/profileControllers');

const routes = express.Router();

routes.get('/ongs', ongController.index); 
routes.post('/ongs', ongController.create); 

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;