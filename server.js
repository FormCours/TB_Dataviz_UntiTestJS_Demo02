const express = require('express');
const productRouter = require('./routes/product-router');

// Loading config env
require('dotenv').config()

// Outil pour l'async/await avec express
require('express-async-errors');

// Connection à la DB
const db = require('./database');
db.connect().then(() => {
    console.log("Connected to MongoDB")
});

// Création du server
const server = express();
server.use(express.json());

// Ajout des routers
server.use(productRouter);

// Lancement du server
server.listen(process.env.PORT, () => {
    console.log(`Server API up on port ${process.env.PORT} [${process.env.NODE_ENV}]`);
});

// Export du server API (necessaire pour les tests)
module.exports = server;