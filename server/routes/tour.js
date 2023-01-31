import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { createTour, getTour } from "../controller/tour.js";

router.post("/", auth, createTour);
router.get("/", getTour);

export default router;
