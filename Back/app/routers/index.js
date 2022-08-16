const express = require('express');

// Création router express
const router = express.Router();

// Import des helpers nécessaires
const controllerHandler = require('../helpers/controllerHandler');

// Import des controllers
const libraryController = require('../controllers/libraryController');

router.get('/mylibrary/:id', controllerHandler(libraryController.getPersonnalLibrary));
