// Middleware de gestion de l'authentification qui va vérifier la validité d'un token
const jwt = require('../helpers/jwt');
const AuthError = require('../errors/authError');

module.exports = (req, res, next) => {
    const verifiedToken = jwt.get(req);
    if (!verifiedToken) {
        throw new AuthError('Authentification failed');
    }
    next();
};
