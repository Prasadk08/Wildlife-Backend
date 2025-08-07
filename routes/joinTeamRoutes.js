import express from "express";
import { joinTeam } from "../controllers/joinTeamController.js";

const router = express.Router();

router.post("/", joinTeam);

export default router;
