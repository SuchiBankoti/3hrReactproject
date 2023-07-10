import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;
  return (
    <div style={{ padding: "2rem", marginLeft: "50rem" }}>
      <h1>{id}</h1>
      <ul>
        <li>
          <img src="" alt="i1" />
        </li>
        <li>
          <img src="" alt="i2" />
        </li>
        <li>
          <img src="" alt="i3" />
        </li>
      </ul>
      <div>
        <h2>review</h2>
        <p>review2</p>
        <p>review3</p>
        <p>review4</p>
        <p>review5</p>
      </div>
    </div>
  );
}
