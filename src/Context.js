import React, { createContext, useState, useEffect, useMemo } from "react";

const myContext = createContext();

function ContextDataProvider(props) {
  const api =
    "https://ecommerce-sharp-default-rtdb.asia-southeast1.firebasedatabase.app";
  const arr = useMemo(
    () => [
      "-NZzGvR4r9rDKZhho6RA",
      "-NZzHHoGpU4elzv3ikYv",
      "-NZzel-kOXYFhNWLYQz9",
    ],
    []
  );
  const [allProductsKey, toursDataKey, customerContactDataKey] = arr;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [tours, setTours] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [token, setToken] = useState(getFromLocStr);
  useEffect(() => {
    async function getData() {
      getAllProductsData();
      getAllToursData();
      getAllContactsData();
    }
    getData();
  }, [api, arr]);

  async function getAllProductsData() {
    const allproductResponse = await fetch(
      `${api}/data/${allProductsKey}.json`
    );
    const result = await allproductResponse.json();
    const a = Object.entries(result);
    const allproductData = a.map((e) => {
      return e[1];
    });
    setProducts(allproductData);
  }
  async function getAllToursData() {
    const alltoursResponse = await fetch(`${api}/data/${toursDataKey}.json`);
    const result = await alltoursResponse.json();
    const a = Object.entries(result);
    const alltoursData = a.map((e) => {
      return e[1];
    });
    setTours(alltoursData);
  }
  async function getAllContactsData() {
    const allContactsResponse = await fetch(
      `${api}/data/${customerContactDataKey}.json`
    );
    const result = await allContactsResponse.json();
    const allContactsData = Object.values(result);
    setAllContacts(allContactsData);
  }
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
  async function postCustomerContact(contact) {
    await fetch(`${api}/data/${customerContactDataKey}.json`, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  function saveToLocStr(token) {
    localStorage.setItem("token", token);
    const t = localStorage.getItem("token");
    setToken(t);
  }
  function getFromLocStr() {
    const t = localStorage.getItem("token");
    return t;
  }
  function removeFromLocStr() {
    localStorage.removeItem("token");
    setToken("");
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
        tours,
        api,
        arr,
        setProducts,
        setTours,
        allContacts,
        postCustomerContact,
        token,
        saveToLocStr,
        removeFromLocStr,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
export { ContextDataProvider, myContext };
