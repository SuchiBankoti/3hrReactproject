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
import AuthForm from "./Components/Authorization/AuthForm";
import Account from "./Components/Authorization/Account";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextDataProvider>
      <Routes>
        <Route path="/3hrreactproject/" element={<App />}></Route>
        <Route path="/3hrreactproject/about" element={<About />}></Route>
        <Route path="/3hrreactproject/home" element={<Home />}></Route>
        <Route path="/3hrreactproject/contact" element={<Contact />}></Route>
        <Route
          path="/3hrreactproject/productdetail/:id"
          element={<ProductDetail />}
        ></Route>
        <Route path="/3hrreactproject/auth" element={<AuthForm />}></Route>
        <Route path="/3hrreactproject/account" element={<Account />}></Route>
      </Routes>
    </ContextDataProvider>
  </BrowserRouter>
);
