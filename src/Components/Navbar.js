import React, { useContext } from "react";
import MainCart from "./MainCart";
import { NavLink } from "react-router-dom";
import { myContext } from "../Context";
import { Navbar, Button, Badge } from "react-bootstrap";

export default function NavBar() {
  const { showCart, setShowCart, cartItems, token } = useContext(myContext);
  return (
    <>
      <Navbar
        bg="dark"
        expand="sm"
        variant="dark"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
        className="nav"
      >
        <NavLink to="/3hrreactproject/home" className="active-link">
          Home
        </NavLink>
        <NavLink to="/3hrreactproject/" className="active-link">
          Store
        </NavLink>
        <NavLink to="/3hrreactproject/about" className="active-link">
          About
        </NavLink>
        <NavLink to="/3hrreactproject/contact" className="active-link">
          Contact Us
        </NavLink>
        {token ? (
          <NavLink to="/3hrreactproject/account" className="active-link">
            Account
          </NavLink>
        ) : (
          <NavLink to="/3hrreactproject/auth" className="active-link">
            LogIn
          </NavLink>
        )}
        <Navbar>
          <Button
            variant="primary"
            onClick={() => setShowCart((prev) => !prev)}
          >
            Cart<Badge>{cartItems.length}</Badge>
          </Button>
          {showCart ? <MainCart /> : ""}
        </Navbar>
      </Navbar>
    </>
  );
}
