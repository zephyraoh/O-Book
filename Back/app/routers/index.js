const express = require('express');

// Création router express
const router = express.Router();

// Import des helpers nécessaires
const controllerHandler = require('../helpers/controllerHandler');
const auth = require('../middlewares/auth');

// Import des controllers
const userController = require('../controllers/userController');

router.post('/signin', controllerHandler(userController.signin));
router.post('/createuser', controllerHandler(userController.createUser));

// Test de route authentifiée
router.get('/users', auth, controllerHandler(userController.getAllUsers));

module.exports = router;
