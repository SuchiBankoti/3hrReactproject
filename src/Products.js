import React from "react";
import { Button } from "react-bootstrap";
export default function Products(props) {
  const { productId, sellingPrice, productName } = props.data;
  const delete_product = props.deleteProduct;
  return (
    <tr>
      <td> {productId}</td>
      <td>{productName}</td>
      <td>{sellingPrice}</td>
      <td>
        <Button variant="secondary" onClick={() => delete_product(productId)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}
