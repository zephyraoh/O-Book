const expressJSDocSwagger = require('express-jsdoc-swagger');

// Ce helper va permettre de générer une doc de l'API
const options = {
    info: {
        version: '1.0.0',
        title: "O'Book",
        description: "Projet de fin d'étude O'Book",
    },
    baseDir: __dirname,
    // On analyse tous les fichiers du projet
    filesPattern: ['../routers/**/*.js', '../errors/*.js', '../models/*.js'],
    // URL où sera disponible la page de documentation
    swaggerUIPath: '/api-docs',
    // Activation de la documentation à travers une route de l'API
    exposeApiDocs: true,
    apiDocsPath: '/api/docs',
};

/**
 * Swagger middleware factory
 * @param {object} app Express application
 * @returns Express JSDoc Swagger middleware that create web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
