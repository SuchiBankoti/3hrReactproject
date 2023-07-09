import React, { useContext } from "react";
import { myContext } from "./Context";
import { Table } from "react-bootstrap";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, removeProductFromCart } = useContext(myContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <Table>
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
    </div>
  );
}
