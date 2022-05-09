const express = require("express");
const app = express();
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.yellow.bold);
});
