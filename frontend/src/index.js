import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ChakraProvider>
    <Router>
      <ChatProvider>
        <App />
      </ChatProvider>
    </Router>
  </ChakraProvider>
);
