const PORT = 5000;
import express from "express";
import bodyParser from "body-parser";
const app = express();

import usersRoutes from "./routes/users.js";

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("HOME PAGE"));

app.listen(PORT, () =>
    console.log(`Server is Running on port: http://localhost:${PORT}`)
);