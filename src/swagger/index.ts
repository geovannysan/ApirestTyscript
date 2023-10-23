// src/swagger/index.ts

import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = require('./swagger.json');

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Ruta a las definiciones de Swagger en tu código
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

// Middleware para servir la documentación Swagger generada
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
