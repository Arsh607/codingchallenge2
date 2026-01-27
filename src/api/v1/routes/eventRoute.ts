import * as eventController from "../controllers/eventController"; 
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/events", eventController.getAllEvents)

export default router;