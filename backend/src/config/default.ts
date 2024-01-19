import { CorsOptions } from "cors";
import { config } from "dotenv";
import { ServerOptions } from "socket.io";
config()

export const PORT: string | number = process.env.PORT || 5173
export const corsOption: CorsOptions = {
    origin: "*",
    credentials: true,
}

export const socketServerOption: Partial<ServerOptions> = {
    cors: {
        origin: "*"
    },
}