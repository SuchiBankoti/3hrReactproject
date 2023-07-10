import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextDataProvider } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ProductDetail from "./Components/ProductDetails";
// this is the ecommerce project
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextDataProvider>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
      </Routes>
    </ContextDataProvider>
  </BrowserRouter>
);
