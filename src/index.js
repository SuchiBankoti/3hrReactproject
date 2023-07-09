import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextDataProvider } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
// this is the ecommerce project
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextDataProvider>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </ContextDataProvider>
  </BrowserRouter>
);

/* <Form>
<Form.Group controlId="formProductID">
  <Form.Label>
    Product ID
    <Form.Control
      type="number"
      name="productId"
      value={formdata.productId}
      onChange={handleChange}
    />
  </Form.Label>
</Form.Group>
<Form.Group controlId="formSellingPrice">
  <Form.Label>
    Selling price
    <Form.Control
      type="number"
      name="sellingPrice"
      value={formdata.sellingPrice}
      onChange={handleChange}
    />
  </Form.Label>
</Form.Group>
<Form.Group controlId="formProductName">
  <Form.Label>
    Product name
    <Form.Control
      type="text"
      name="productName"
      value={formdata.productName}
      onChange={handleChange}
    />
  </Form.Label>
</Form.Group>
</Form> */
