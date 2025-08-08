import express from "express";
import {
  getAllPrograms,
  getProgramById,
  deleteProgramById,
} from "../controllers/programController.js";

const router = express.Router();

/**
 * @swagger
 * /api/programs:
 *   get:
 *     summary: Get all government programs
 *     tags: [Programs]
 *     responses:
 *       200:
 *         description: A list of government programs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   image:
 *                     type: string
 */
router.get("/", getAllPrograms);


/**
 * @swagger
 * /api/wildlife/{id}:
 *   get:
 *     summary: Get wildlife entry by ID
 *     tags: [Wildlife]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MongoDB ObjectId of the animal
 *     responses:
 *       200:
 *         description: Wildlife found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wildlife'
 *       404:
 *         description: Not found
 */
router.get("/:id", getProgramById);

/**
 * @swagger
 * /api/programs/{id}:
 *   delete:
 *     summary: Delete a program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the program
 *     responses:
 *       200:
 *         description: Program deleted successfully
 *       404:
 *         description: Program not found
 */
router.delete("/:id", deleteProgramById);

export default router;
