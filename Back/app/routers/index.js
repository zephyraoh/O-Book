const express = require('express');

// Création router express
const router = express.Router();

// Import des helpers nécessaires
const controllerHandler = require('../helpers/controllerHandler');

// Import des controllers
const libraryController = require('../controllers/libraryController');
const userController = require('../controllers/userController');

router.post('/signin', controllerHandler(userController.signin));
router.post('/signup', controllerHandler(userController.signup));
router.get('/mylibrary/:id', controllerHandler(libraryController.getPersonnalLibrary));

module.exports = router;
