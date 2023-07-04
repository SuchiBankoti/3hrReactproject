import React from "react";
import { useState } from "react";
import Products from "./Products";
import "./App.css";

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
      <form>
        <label>
          Product ID
          <input
            type="number"
            name="productId"
            value={formdata.productId}
            onChange={handleChange}
          />
        </label>
        <label>
          Selling price
          <input
            type="number"
            name="sellingPrice"
            value={formdata.sellingPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          Product name
          <input
            type="text"
            name="productName"
            value={formdata.productName}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={addProducts}>Add Product</button>
      <div>
        <h2>Products</h2>
        <ul className="displayContainer">
          {products.map((obj, i) => (
            <Products data={obj} key={i} deleteProduct={deleteProduct} />
          ))}
        </ul>
        <div>
          <h3>Total Value of Products</h3>
          <div>
            {products.reduce(
              (sum, obj) => (sum += Number(obj.sellingPrice)),
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
