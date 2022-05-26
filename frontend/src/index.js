import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";

const container = document.getElementById("root");

render(
  <Router>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </Router>,
  container
);
