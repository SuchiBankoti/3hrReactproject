import React from "react";
import { useState } from "react";
import Products from "./Products";
import "./App.css";
import { Button, Navbar, Form, Table, Badge } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([]);
  const [formdata, setFormdata] = useState({
    productId: "",
    sellingPrice: "",
    productName: "",
  });
  function handleChange(event) {
    setFormdata((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  function addProducts() {
    localStorage.setItem(`${formdata.productId}`, JSON.stringify(formdata));
    setProducts((prev) => [...prev, formdata]);
  }
  function deleteProduct(id) {
    localStorage.removeItem(id);
    setProducts((prev) => prev.filter((obj) => obj.productId !== id));
  }
  return (
    <div className="App">
      <Navbar bg="dark" expand="sm" variant="dark">
        <Navbar.Brand>My Products</Navbar.Brand>
      </Navbar>
      <Form>
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
      </Form>
      <Button variant="primary" onClick={addProducts}>
        Add Products
      </Button>
      <div>
        <h2>Products</h2>
        <Table className="displayContainer">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((obj, i) => (
              <Products data={obj} key={i} deleteProduct={deleteProduct} />
            ))}
          </tbody>
        </Table>
        <Button variant="dark">
          Total Value Of Products
          <Badge>
            {products.reduce(
              (sum, obj) => (sum += Number(obj.sellingPrice)),
              0
            )}
          </Badge>
        </Button>
      </div>
    </div>
  );
}

export default App;
