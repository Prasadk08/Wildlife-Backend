import express from "express";
import { joinTeam } from "../controllers/joinTeamController.js";

const router = express.Router();

/**
 * @swagger
 * /api/join:
 *   post:
 *     summary: Submit a request to join the team
 *     tags: [Join Team]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 example: Prasad
 *               email:
 *                 type: string
 *                 example: prasad@example.com
 *               role:
 *                 type: string
 *                 example: Volunteer
 *     responses:
 *       200:
 *         description: Join request submitted successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", joinTeam);

export default router;
