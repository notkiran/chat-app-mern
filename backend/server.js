const express = require("express");
const app = express();
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

//Routes
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.yellow.bold);
});
