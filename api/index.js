"use strict";
import express from "express";
import cors from "cors";
import { PORT } from "./configs.js";
import { getAllUserFromDB, addUserToDB } from "./db.js";

// base express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// '/' endpoint to test the server
app.get("/", (_, res) => res.status(200).send("Hello World from Server!"));

// get all user from the database
app.get("/users", async (_, res) => {
  try {
    const data = await getAllUserFromDB();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "Error getting users." });
  }
});

app.post("/users", async (req, res) => {
  try {
    const userData = req.body;
    const data = await addUserToDB(userData);
    // console.log({ data });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "Error getting users." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
