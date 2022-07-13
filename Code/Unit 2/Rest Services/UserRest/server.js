require("dotenv").config();
const port = 3013;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const usersRouter = require("./routers/users");
app.use("/ChocoAndino", usersRouter);

app.listen(port, () => console.log("Server Started on port" + port));
