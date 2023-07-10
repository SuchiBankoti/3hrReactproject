import React, { useContext } from "react";
import MainCart from "./MainCart";
import { NavLink } from "react-router-dom";
import { myContext } from "../Context";
import { Navbar, Button, Badge } from "react-bootstrap";

export default function NavBar() {
  const { showCart, setShowCart, cartItems } = useContext(myContext);
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
        <NavLink to="/home" className="active">
          Home
        </NavLink>
        <NavLink to="/" className="active">
          Store
        </NavLink>
        <NavLink to="/about" className="active">
          About
        </NavLink>
        <NavLink to="/contact" className="active">
          Contact Us
        </NavLink>
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
