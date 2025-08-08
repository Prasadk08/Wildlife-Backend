import express from "express";
import { getAllWildlife } from "../controllers/wildLifeController.js";

const router = express.Router();

router.get("/", getAllWildlife);

export default router;

/**
 * @swagger
 * tags:
 *   name: Wildlife
 *   description: Endpoints for wildlife data
 */

/**
 * @swagger
 * /api/wildlife:
 *   get:
 *     summary: Get all wildlife entries
 *     tags: [Wildlife]
 *     responses:
 *       200:
 *         description: List of all wildlife
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Wildlife'
 */
router.get('/', controller.getAllWildlife);



