import express from "express";
import getAllWildlife from "../controllers/wildLifeController.js";

const router = express.Router();

router.get("/", getAllWildlife);

export default router;
