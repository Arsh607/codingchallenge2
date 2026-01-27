import * as fetchEvents  from "../services/eventService";
import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { EventModel } from "../models/eventModel";

export const getAllEvents = (req: Request, res: Response,): void => {
    const result: EventModel[] = fetchEvents.getAllEvents();
    const count : number = result.length;
    
    res.json({ 
        message: `Events retrieved`, 
        count: `${count}`,
        data: result,
    })
};
