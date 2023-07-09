import React, { createContext, useState } from "react";

const myContext = createContext();

const allProducts = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 5,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 6,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function ContextDataProvider(props) {
  const [products, setProducts] = useState(allProducts);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addProductToCart(id) {
    const newCartItem = products.find((item) => item.id === id);
    if (!cartItems.find((item) => item.id === id)) {
      setCartItems((prev) => [...prev, newCartItem]);
    } else {
      alert("Product already added to the cart");
    }
  }
  function removeProductFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  function clearCart() {
    setCartItems([]);
    alert("Thankyou for your purchase");
  }
  return (
    <myContext.Provider
      value={{
        products,
        cartItems,
        addProductToCart,
        removeProductFromCart,
        showCart,
        setShowCart,
        clearCart,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
export { ContextDataProvider, myContext };
