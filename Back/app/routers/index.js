const express = require('express');

// Création router express
const router = express.Router();

// Import des helpers nécessaires
const controllerHandler = require('../helpers/controllerHandler');

// Import des controllers
const userController = require('../controllers/userController');

router.post('/signin', controllerHandler(userController.signin));
router.post('/createuser', controllerHandler(userController.createUser));

module.exports = router;
