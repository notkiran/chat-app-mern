const express = require("express");
const app = express();
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running");
});

//Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.yellow.bold);
});
