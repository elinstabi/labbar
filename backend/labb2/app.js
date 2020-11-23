const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
    }
    next()
})

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version:'1.0.0'
        }
    },
    apis: ['app.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
/**
 * @swagger
 * /products:
 *      get:
 *          descriptions: Get all products
 *          responses:
 *              200:
 *                  description: Success
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CONTROLLERS
app.use('/api/users', userController);
app.use('/api/products', productController);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

module.exports = app;
