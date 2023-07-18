import React, { useContext } from "react";
import "./index.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ProductDetail from "./Components/ProductDetails";
import AuthForm from "./Components/Authorization/AuthForm";
import Account from "./Components/Authorization/Account";
import Main from "./Main";
import { myContext } from "./Context";

export default function App() {
  const { token } = useContext(myContext);
  return (
    <Routes>
      <Route
        path="/3hrreactproject/"
        element={
          token ? <Main /> : <Navigate replace to="/3hrreactproject/auth" />
        }
      ></Route>
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
  );
}
