import React, { useContext } from "react";
import NavBar from "./Navbar";
import Generics from "./Generics";
import { myContext } from "../Context";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

export default function Home() {
  const { tours } = useContext(myContext);
  return (
    <div>
      <NavBar />
      <div className="header">
        <Generics />
        <div
          style={{
            height: "10rem",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <h2>Get Our Latest Album</h2>
          <div>icon</div>
        </div>
      </div>
      <div className="content">
        <h1>Tours</h1>
        <div className="albumsContainer">
          {tours.map((album, i) => {
            return (
              <div key={i} className="album">
                <span>{album.date}</span>
                <span>{album.location}</span>
                <span>{album.venue}</span>
                <Button variant="secondary" style={{ width: "12rem" }}>
                  Buy Tickets
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
