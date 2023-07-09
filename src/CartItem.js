import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CartItem(props) {
  const { id, title, price, imageUrl, quantity } = props.item;
  const removeProductFromCart = props.removeProductFromCart;
  return (
    <tr>
      <td>
        <Card
          style={{
            width: "25rem",
            height: "6rem",
            border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Card.Img
            variant="top"
            src={imageUrl}
            style={{ width: "5rem", height: "5rem", margin: "0.5rem" }}
          />
          <Card.Title
            style={{ width: "10rem", height: "3rem", margin: "0.5rem" }}
          >
            {title}
          </Card.Title>
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
