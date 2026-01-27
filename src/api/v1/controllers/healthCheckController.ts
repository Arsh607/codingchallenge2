import  {healthCheck} from "../services/healthService";
import { Request, Response } from "express";

export const health = (req: Request, res: Response) => {
    res.json(healthCheck)
};