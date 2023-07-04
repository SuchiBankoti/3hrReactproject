import React from "react";

export default function Products(props) {
  const { productId, sellingPrice, productName } = props.data;
  const delete_product = props.deleteProduct;
  return (
    <li>
      <span> {productId}</span>
      <span>-{productName}</span>
      <span> -{sellingPrice}</span>
      <button onClick={() => delete_product(productId)}>Delete</button>
    </li>
  );
}
