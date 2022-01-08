const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/subscribers", { useNewURLparser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.error("Connected to Database"));

app.listen(3000, () => console.log("Server Started"));
