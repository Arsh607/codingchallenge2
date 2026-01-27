import express, { Express, Request, Response } from "express"
import healthRoute from "./api/v1/routes/healthRoute";


const app: Express = express();

app.use("/api/v1", healthRoute);

export default app;