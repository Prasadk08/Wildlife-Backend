import express from "express";
import {
  getAllPrograms,
  getProgramById,
  deleteProgramById,
} from "../controllers/programController.js";

const router = express.Router();

router.get("/", getAllPrograms);
router.get("/:id", getProgramById);
router.delete("/:id", deleteProgramById);

export default router;
