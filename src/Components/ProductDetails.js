import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Card, Carousel } from "react-bootstrap";
import { myContext } from "../Context";
import { AccordionCollapse, useAccordionButton } from "react-bootstrap";
import NavBar from "./Navbar";
export default function ProductDetail() {
  const { products, addProductToCart } = useContext(myContext);
  const params = useParams();
  const Id = params.id;
  if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  const product = JSON.parse(localStorage.getItem("products")).find(
    (elemet) => Number(elemet.id) === Number(Id)
  );
  const { imageUrl, price, title } = product;

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("product details")
    );

    return (
      <button
        onClick={decoratedOnClick}
        style={{ width: "10rem", border: "none" }}
      >
        {children}
      </button>
    );
  }
  return (
    <>
      <NavBar />
      <div className="product-detail">
        <div className="crousel-container">
          <h1>{title}</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageUrl}
                alt="First slide"
                style={{ width: "10rem", height: "25rem" }}
              />
              <Carousel.Caption>
                <h3 style={{ color: "black" }}>ProductImage1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                }
                alt="Second slide"
                style={{ width: "10rem", height: "25rem" }}
              />

              <Carousel.Caption>
                <h3 style={{ color: "black" }}>ProductImage2</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }
                alt="Third slide"
                style={{ width: "10rem", height: "25rem" }}
              />

              <Carousel.Caption>
                <h3 style={{ color: "black" }}>ProductImage3</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Button variant="secondary">${price}</Button>
        </div>

        <div>
          <Button
            variant="primary"
            onClick={() => addProductToCart(product.id)}
          >
            Add To Cart
          </Button>

          <Accordion>
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">ProductDetail</CustomToggle>
              </Card.Header>
              <AccordionCollapse eventKey="0">
                <Card.Body style={{ width: "15rem" }}>
                  product details, hdfbcuyfgureturrutigviurgynriuy gfbyurtcuyit
                  hfiunrtvycgiurygi unyguit hf kjdkd dfjff djdfhdf
                </Card.Body>
              </AccordionCollapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
}
