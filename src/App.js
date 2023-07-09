import React, { useContext } from "react";
import Products from "./Products";
import "./App.css";
import { Button } from "react-bootstrap";
import { myContext } from "./Context";
import NavBar from "./Navbar";

function App() {
  const { products, addProductToCart, setShowCart } = useContext(myContext);

  return (
    <div className="App">
      <NavBar />
      <div>
        <h2>Products</h2>
        <div className="allProductsContainer">
          {products.map((obj, i) => (
            <Products data={obj} key={i} addProductToCart={addProductToCart} />
          ))}
        </div>
        <Button variant="primary" onClick={() => setShowCart(true)}>
          See The Cart
        </Button>
      </div>
    </div>
  );
}

export default App;
