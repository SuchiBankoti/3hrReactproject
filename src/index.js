import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextDataProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </BrowserRouter>
);
