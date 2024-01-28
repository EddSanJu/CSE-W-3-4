const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Metedata info about API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description:
        'This API handles CRUD operations for a user an memories list, allowing users to create, read, update, and delete contact information.'
    }
  },
  apis: [
    'src/routes/*.js', 
    'src/models/*.js'
  ]
};

// Docs in Json format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup doc
const swaggerDocs = (app, port) => {
  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Doc Version are available at http://localhost:${port}/api/docs`);
};

module.exports = { swaggerDocs };
