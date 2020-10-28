import express from "express";

import userRoutes from "./routes/user.js";
import groupRoutes from "./routes/groups.js";
import {
    logger,
} from "./log/logger.js";

const PORT = 3000;
const app = express();

app.use((err, req, res, next) => {
    console.log('req', req);
    next();
});

app.use(express.json());

//routes

app.use("/api/users/", userRoutes);
app.use("/api/groups/", groupRoutes);


app.listen(PORT);
logger.info(`Server is Running on port: http://localhost:${PORT}`);

process.on("uncaughtException", e => {
    console.log('uncaughtException')
    logger.error(`Error in app: ${JSON.stringify(e)}`);
});