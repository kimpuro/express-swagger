const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API application with Swagger',
    },
  },
  apis: ['./routes/*.js'], // API 문서화 대상 경로
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

