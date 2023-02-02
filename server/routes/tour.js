import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
  getTours,
  getTour,
  getToursByUser,
} from "../controller/tour.js";

router.post("/", auth, createTour);
router.get("/", getTours);
router.get("/:id", getTour);
router.get("/userTours:id", auth, getToursByUser);

export default router;
