"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/users.ts
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * /users:
 *   get:
 *     description: Obtiene todos los usuarios
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/users', (req, res) => {
    res.json({ users: [] });
});
exports.default = router;
