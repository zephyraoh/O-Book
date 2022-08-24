const express = require('express');

// Création router express
const router = express.Router();

// Import des helpers nécessaires
const controllerHandler = require('../helpers/controllerHandler');
const auth = require('../middlewares/auth');

// Import des controllers
const userController = require('../controllers/userController');
const libraryController = require('../controllers/libraryController');
const tagController = require('../controllers/tagController');
const loanController = require('../controllers/loanController');
const bookController = require('../controllers/bookController');

/// Inscription / Connexion
/**
 * POST /login
 * @summary User connexion to generate token
 * @tags User
 * @param {LoginDataModel} request.body.required - User connexion data
 * @return {LogedModel} 200 - success response - application/json
* @return {ClientError} 400 - user error response - application/json
 */
router.post('/login', controllerHandler(userController.login));
/**
 * POST /createuser
 * @summary Create new user
 * @tags User
 * @param {CreateUserModel} request.body.required - User informations
 * @return {string} 200 - User created - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.post('/createuser', controllerHandler(userController.createUser));

/// Profil personnel utilisateur
router.route('/profile')
    /**
     * GET /profile
     * @summary Get personnal profile informations
     * @tags User
     * @security BearerAuth
     * @return {UserModel} 200 - success response - application/json
     * @return {AuthError} 403 - Authentification failed - application/json
     */
    .get(auth, controllerHandler(userController.getProfile))
    /**
     * PATCH /profile
     * @summary Update personnal profile informations
     * @tags User
     * @param {UpdateUserModel} request.body.required - User informations
     * @security BearerAuth
     * @return {UserModel} 200 - success response - application/json
     * @return {AuthError} 403 - Authentification failed - application/json
     * @return {ClientError} 400 - user error response - application/json
     */
    .patch(auth, controllerHandler(userController.updateProfile))
    /**
     * DELETE /profile
     * @summary Delete user's profile
     * @tags User
     * @security BearerAuth
     * @return {string} 200 - "User deleted" - application/json
     * @return {AuthError} 403 - Authentification failed - application/json
     */
    .delete(auth, controllerHandler(userController.deleteProfile));

/// Infos personnelles utilisateur
/**
 * GET /mylibrary
 * @summary Get user's personnal library
 * @tags Library
 * @security BearerAuth
 * @return {PersonnalLibraryModel} 200 - success response - application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 */
router.get('/mylibrary', auth, controllerHandler(libraryController.getMyLibrary));
/**
 * POST /mylibrary/addBook
 * @summary Add book in user's library
 * @tags Library
 * @security BearerAuth
 * @param {AddLibraryModel} request.body.required - Book informations
 * @return {LibraryModel} 200 - success response - application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 */
router.post('/mylibrary/addBook', auth, controllerHandler(libraryController.addBookInLibrary));
/**
 * PATCH /mylibrary/book/:id
 * @summary Update user's library
 * @tags Library
 * @security BearerAuth
 * @param {number} id.path.required - Library identifier
 * @param {UpdateLibraryModel} request.body.required - Availability of the book
 * @return {LibraryModel} 200 - success response - application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.patch('/mylibrary/book/:id', auth, controllerHandler(libraryController.updateBookInLibrary));
/**
 * DELETE /mylibrary/book/:id
 * @summary Delete user's library
 * @tags Library
 * @security BearerAuth
 * @param {number} id.path.required - Library identifier
 * @return {string} 200 - "Library deleted" - application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.delete('/mylibrary/book/:id', auth, controllerHandler(libraryController.deleteBookFromLibrary));

/// Infos de contact de l'utilisateur prêteur
/**
 * GET /userinfos/:username
 * @summary Get contact informations
 * @tags User
 * @param {number} username.path.required - User's username
 * @return {UserModel} 200 - success response - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.get('/userinfos/:username', controllerHandler(userController.getContactInfos));

/// Librairie autre utilisateur
/**
 * GET /library/:id
 * @summary Get other user library
 * @tags Library
 * @param {number} username.path.required - User's username
 * @return {LibraryModel} 200 - success response - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.get('/library/:username', controllerHandler(libraryController.getLibrary));

/// Gestion des emprunts
/**
 * POST /loan
 * @summary Generate new loan
 * @tags Loan
 * @security BearerAuth
 * @param {AddLoanModel} request.body.required - Library identifier
 * @return {LoanModel} 200 - success response- application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.post('/loan', auth, controllerHandler(loanController.generateLoan));
/**
 * PATCH /loans/:id
 * @summary Update loan status
 * @tags Loan
 * @security BearerAuth
 * @param {number} id.path.required - Loan identifier
 * @param {UpdateLoanModel} request.body.required - Loan status
 * @return {LoanModel} 200 - success response- application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.patch('/loan/:id', auth, controllerHandler(loanController.updateLoan));

/**
 * GET /loans
 * @summary Get last loans
 * @tags Loan
 * @return {[LoanModel]} 200 - success response - application/json
 * @return {ApiError} 400 - Internal Server Error - application/json
 */
router.get('/loans', controllerHandler(loanController.getLoans));

/// Récupération des informations de livres
/**
 * GET /books
 * @summary Get last books
 * @tags Book
 * @return {[BookModel]} 200 - success response - application/json
 * @return {ApiError} 400 - Internal Server Error - application/json
 */
router.get('/books', controllerHandler(bookController.getBooks));
/**
 * GET /book/:isbn
 * @summary Get last books
 * @tags Book
 * @param {string} isbn.path.required - Book's ISBN number
 * @return {[UserModel]} 200 - success response - application/json
 * @return {ApiError} 400 - Internal Server Error - application/json
 */
router.get('/book/:isbn', controllerHandler(bookController.getUsersByBook));

/// Gestion des tags
/**
 * GET /tags
 * @summary Get all tags
 * @tags Tag
 * @return {[TagModel]} 200 - success response - application/json
 * @return {ApiError} 400 - Internal Server Error - application/json
 */
router.get('/tags', controllerHandler(tagController.getTags));
/**
 * POST /addtag
 * @summary Add tag to user
 * @tags Tag
 * @security BearerAuth
 * @param {UpdateTagModel} request.body.required - Tag identifier
 * @return {TagModel} 200 - success response - application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.post('/addtag', auth, controllerHandler(tagController.addTagToUser));
/**
 * PATCH /removetag
 * @summary Remove tag from user
 * @tags Tag
 * @security BearerAuth
 * @param {UpdateTagModel} request.body.required - Tag identifier
 * @return {string} 200 - Association removed - application/json
 * @return {AuthError} 403 - Authentification failed - application/json
 * @return {ClientError} 400 - user error response - application/json
 */
router.delete('/removetag', auth, controllerHandler(tagController.removeTagFromUser));

module.exports = router;
