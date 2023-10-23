// src/routes/users.ts
import  express from "express";
const router = express.Router();

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

export default router;
