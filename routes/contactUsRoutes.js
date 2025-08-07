import express from "express";
import { contactUss } from "../controllers/contactUsController.js";

const router = express.Router();

router.post("/", contactUss);

export default router;
