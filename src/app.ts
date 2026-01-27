import express, { Express, Request, Response } from "express"
import healthRoute from "./api/v1/routes/healthRoute";
import eventRoute from "./api/v1/routes/eventRoute";


const app: Express = express();

app.use("/api/v1", healthRoute);
app.use("/api/v1", eventRoute)

export default app;