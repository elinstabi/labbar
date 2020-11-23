const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

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
console.log(swaggerDocs);
//app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
/**
 * @swagger
 * /products:
 *      get:
 *          descriptions: Get all products
 *          responses:
 *              200:
 *                  description: Success
 */


module.exports = swaggerJsDoc;
module.exports = swaggerUI;