import express from "express";
import { contactUss } from "../controllers/contactUsController.js";

const router = express.Router();

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit a contact form
 *     tags: [Contact Us]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: Prasad
 *               email:
 *                 type: string
 *                 example: prasad@example.com
 *               message:
 *                 type: string
 *                 example: I would like to know more about the project.
 *     responses:
 *       200:
 *         description: Contact form submitted successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", contactUss);

export default router;
