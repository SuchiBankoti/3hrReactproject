import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CartItem(props) {
  const { id, title, price, imageUrl, quantity } = props.item;
  const removeProductFromCart = props.removeProductFromCart;
  return (
    <tr>
      <td>
        <Card style={{ width: "5rem", height: "5rem", display: "flex" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Button variant="secondary" onClick={() => removeProductFromCart(id)}>
          Remove
        </Button>
      </td>
    </tr>
  );
}
