import {event} from "../repositories/eventRepository";
import { attendee } from "../repositories/attendeeRepository";
import { EventModel } from "../models/eventModel";
import { AttendeeModel } from "../models/attendeemodel";


export const getAllEvents = () => {
    return event;
};
