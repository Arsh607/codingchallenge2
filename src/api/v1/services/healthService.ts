import { HealthCheckResponse } from "../models/healthCheckModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const healthCheck: HealthCheckResponse = {
    status: HTTP_STATUS.OK,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
}