const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const Message = require("../models/message");
const User = require("../models/userModel");

const sendMessage = asyncHandler(async (req, res, next) => {
  const { chatId, content } = req.body;

  if (!chatId || !content) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  let newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    let message = await Message.create(newMessage);
    message = await message.populate("sender", "name pic").excPopulate();
    message = await message.populate("chat").excPopulate();
    messge = await User.populate(messsage, {
      path: "chat.users",
      select: "name pic email",
    });
      
    await Chat.findByIdAndUpdate(req.body.chatId, {
      $push: { messages: message._id },
    } catch (error) {
      console.log(error);
  }
});

module.exports = { sendMessage };
