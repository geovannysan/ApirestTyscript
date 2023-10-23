"use strict";
// src/swagger/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDefinition = require('./swagger.json');
const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'], // Ruta a las definiciones de Swagger en tu código
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const app = (0, express_1.default)();
// Middleware para servir la documentación Swagger generada
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
exports.default = app;
