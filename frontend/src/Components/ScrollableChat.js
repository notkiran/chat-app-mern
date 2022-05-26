import React from "react";
import ScrollableFeed from "react-scrollable-feed";

const ScrollableChat = ({ messages }) => {
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((message, index) => (
            <div style={{ display: "flex" }} key={message._id}>
                
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
