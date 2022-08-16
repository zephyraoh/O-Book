// Import du module express
const express = require('express');
// Import du router
const router = require('./routers');

// Création du serveur express
const app = express();

// On fourni le routeur au serveur express
app.use(router);

// Export du serveur express
module.exports = app;
