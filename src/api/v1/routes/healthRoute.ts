import * as healthController from "../controllers/healthCheckController";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/health", healthController.health);

export default router;