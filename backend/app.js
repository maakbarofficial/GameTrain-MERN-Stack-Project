import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Of MERN Project");
});

app.listen(4000, () => {
  console.log("Server is working");
});
