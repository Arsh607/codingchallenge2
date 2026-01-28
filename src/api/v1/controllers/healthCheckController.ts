import  {healthCheck} from "../services/healthService";
import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const health = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(healthCheck)
};