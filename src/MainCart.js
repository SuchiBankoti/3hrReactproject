import React, { useContext } from "react";
import { myContext } from "./Context";
import { Badge, Button, Table } from "react-bootstrap";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, removeProductFromCart, clearCart, setShowCart } =
    useContext(myContext);

  return (
    <div className="cart">
      <h1 className="closecart" onClick={() => setShowCart(false)}>
        &times;
      </h1>
      <h2>Cart</h2>
      <Table style={{ margin: "1rem" }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, i) => (
            <CartItem
              key={i}
              item={item}
              removeProductFromCart={removeProductFromCart}
            />
          ))}
        </tbody>
      </Table>
      <div>
        <h1>
          Total{" "}
          <Badge>
            {" "}
            ${cartItems.reduce((sum, item) => (sum += Number(item.price)), 0)}
          </Badge>
        </h1>
      </div>
      <Button variant="primary" onClick={clearCart}>
        Purchase
      </Button>
    </div>
  );
}
