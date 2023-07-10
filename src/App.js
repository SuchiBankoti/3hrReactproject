import React, { useContext } from "react";
import Products from "./Components/Products";
import "./App.css";
import { Button } from "react-bootstrap";
import { myContext } from "./Context";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const { products, addProductToCart, setShowCart } = useContext(myContext);
  return (
    <div className="App">
      <NavBar />
      <div>
        <h2>Products</h2>
        <div className="allProductsContainer">
          {products.length > 0 ? (
            products.map((obj, i) => (
              <Products
                data={obj}
                key={i}
                addProductToCart={addProductToCart}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <Button variant="primary" onClick={() => setShowCart(true)}>
          See The Cart
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
