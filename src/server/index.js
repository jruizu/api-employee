const express = require('express');
const cors = require('cors');

// Import Routes
const routes = require('../routes');

module.exports = app => {
    // Settings
    app.set('port', process.env.PORT || 3000);

    // middlerware  
    app.use(cors()); 
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    // Router
    routes(app);

    return app;
}
