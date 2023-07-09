import React, { useContext } from "react";
import Products from "./Products";
import "./App.css";
import { Button, Navbar, Badge } from "react-bootstrap";
import { myContext } from "./Context";
import MainCart from "./MainCart";

function App() {
  const { cartItems, products, addProductToCart, showCart, setShowCart } =
    useContext(myContext);

  return (
    <div className="App">
      <Navbar bg="dark" expand="sm" variant="dark">
        <Navbar bg="dark" expand="sm" variant="dark">
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Brand>Store</Navbar.Brand>
          <Navbar.Brand>About</Navbar.Brand>
        </Navbar>
        <Navbar>
          <Button
            variant="primary"
            onClick={() => setShowCart((prev) => !prev)}
          >
            Cart<Badge variant="light">{cartItems.length}</Badge>
          </Button>
          {showCart ? <MainCart /> : ""}
        </Navbar>
      </Navbar>
      <div>
        <h2>Products</h2>
        <div className="allProductsContainer">
          {products.map((obj, i) => (
            <Products data={obj} key={i} addProductToCart={addProductToCart} />
          ))}
        </div>
        <Button variant="primary">Go To Cart</Button>
      </div>
    </div>
  );
}

export default App;
