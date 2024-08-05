const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRUD API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos da API
};

const specs = swaggerJsdoc(options);

module.exports = specs;
