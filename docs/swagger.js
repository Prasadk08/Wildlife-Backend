// docs/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Guardians of Wildlife API',
      version: '1.0.0',
      description: 'This is the API documentation for the Guardians of Wildlife project.',
    },
    servers: [
      {
        url: 'https://wildlife-backend-oo00.onrender.com',
      },
    ],
    components: {
      schemas: {
        Wildlife: {
          type: 'object',
          required: ['name', 'species', 'habitat'],
          properties: {
            name: {
              type: 'string',
              description: 'Name of the animal',
            },
            species: {
              type: 'string',
              description: 'Species of the animal',
            },
            habitat: {
              type: 'string',
              description: 'Natural habitat of the animal',
            },
            status: {
              type: 'string',
              enum: ['Endangered', 'Vulnerable', 'Safe'],
              description: 'Conservation status',
            },
            description: {
              type: 'string',
              description: 'Detailed description',
            },
            image: {
              type: 'string',
              description: 'Image URL',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
