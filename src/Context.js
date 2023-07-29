import React, { createContext, useState, useEffect } from "react";

const myContext = createContext();

function ContextDataProvider(props) {
  const api =
    "https://ecommerce-sharp-default-rtdb.asia-southeast1.firebasedatabase.app";
  const allProductsKey = process.env.REACT_APP_ALL_PRODUCTS_KEY;
  const toursDataKey = process.env.REACT_APP_TOURS_DATA_KEY;
  const customerContactDataKey =
    process.env.REACT_APP_CUSTOMER_CONTACT_DATA_KEY;
  const allUsersApi = process.env.REACT_APP_ALL_USERS_KEY;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [tours, setTours] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [token, setToken] = useState(getFromLocStr);
  const [userAccount, setUserAccount] = useState({});
  const [userAccountKey, setUserAccountKey] = useState(
    localStorage.getItem("userAccountKey")
  );

  useEffect(() => {
    async function getData() {
      getAllProductsData();
      getAllToursData();
      getAllContactsData();
    }
    getData();
  }, []);

  useEffect(() => {
    async function getUserAccount() {
      if (token && userAccountKey) {
        const res = await fetch(
          `${api}/data/${allUsersApi}/${userAccountKey}.json`
        );
        const accountData = await res.json();
        console.log(accountData);
        if (accountData.cart) {
          console.log("cart exists");
          console.log(accountData.cart);
          const temp = accountData.cart;
          setCartItems(temp);
        }
        setUserAccount(accountData);
      }
    }
    getUserAccount();
  }, [token, userAccountKey]);

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
    localStorage.removeItem("userAccountKey");
    setToken("");
    setUserAccountKey("");
    setCartItems([]);
  }

  useEffect(() => {
    async function addCartItemTodataBase() {
      if (cartItems.length > 0) {
        console.log(cartItems);
        console.log("add items to base");
        const res = await fetch(
          `${api}/data/${allUsersApi}/${userAccountKey}.json`,
          {
            method: "PATCH",
            body: JSON.stringify({
              cart: cartItems,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setUserAccount((prev) => {
          return {
            ...prev,
            ...data,
          };
        });
      }
    }
    addCartItemTodataBase();
  }, [cartItems]);

  async function createNewUserAccountKey(emailId) {
    const res = await fetch(`${api}/data/${allUsersApi}.json`, {
      method: "POST",
      body: JSON.stringify({
        email: emailId,
        cart: [],
        orders: [],
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const key = await res.json();
    console.log(key);
    localStorage.setItem("userAccountKey", key.name);
    setUserAccountKey(key.name);
  }
  async function getUserAccountKey(emailId) {
    const res = await fetch(`${api}/data/${allUsersApi}.json`);
    const allUsers = await res.json();
    const tempKey = getIDfromuserObj(allUsers, emailId);
    localStorage.setItem("userAccountKey", tempKey);
    setUserAccountKey(tempKey);
    function getIDfromuserObj(obj, userId) {
      for (const key in obj) {
        if (obj[key].email === userId) {
          return key;
        }
      }
    }
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
        setProducts,
        setTours,
        allContacts,
        postCustomerContact,
        token,
        saveToLocStr,
        removeFromLocStr,
        getUserAccountKey,
        createNewUserAccountKey,
        userAccount,
        setUserAccount,
        userAccountKey,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
export { ContextDataProvider, myContext };
