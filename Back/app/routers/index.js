const express = require('express');

// Création router express
const router = express.Router();

// Import des helpers nécessaires
const controllerHandler = require('../helpers/controllerHandler');
const auth = require('../middlewares/auth');

// Import des controllers
const userController = require('../controllers/userController');
const libraryController = require('../controllers/libraryController');

/// Inscription / Connexion
/**
 * POST /login
 * @summary User connexion to generate token
 * @tags User
 * @param {string} request.body.required - User email
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - user error response - application/json
 */
router.post('/login', controllerHandler(userController.signin));
/**
 * POST /createuser
 * @summary Create new user
 * @tags User
 * @param {UserModel} request.body.required - User data to add to DB
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - user error response - application/json
 */
router.post('/createuser', controllerHandler(userController.createUser));

/// Infos personnelles utilisateur
router.route('mylibrary')
    /**
     * GET /mylibrary
     * @summary Get user personnal library
     * @tags User
     * @return {string} 200 - success response - application/json
     * @return {string} 400 - user error response - application/json
     */
    .get(auth, controllerHandler(libraryController.getMyLibrary));
/**
 * GET /profile
 * @summary Get personnal profile informations
 * @tags User
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - user error response - application/json
 */
router.get('/profile', auth, controllerHandler(userController.getPersonnalInformations));

// Librairie autre utilisateur
/**
 * GET /library/:id
 * @summary Get other user library
 * @tags Visitor
 * @return {string} 200 - success response - application/json
 * @return {string} 400 - user error response - application/json
 */
router.get('/library/:id', controllerHandler(libraryController.getLibrary));

// Test de route authentifiée
router.get('/users', auth, controllerHandler(userController.getAllUsers));

module.exports = router;
