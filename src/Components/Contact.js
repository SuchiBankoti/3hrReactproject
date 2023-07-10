import React, { useContext, useState } from "react";
import { myContext } from "../Context";
import NavBar from "./Navbar";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  const { allContacts, postCustomerContact } = useContext(myContext);
  const [contactdata, setContactdata] = useState({
    name: "",
    email: "",
    phone: "",
  });
  function handlecontactChange(e) {
    setContactdata((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div>
      <NavBar />
      <div style={{ margin: "auto", padding: "2rem" }}>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>
              Name
              <Form.Control
                type="text"
                name="name"
                value={contactdata.name}
                onChange={handlecontactChange}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>
              Email
              <Form.Control
                type="email"
                name="email"
                value={contactdata.email}
                onChange={handlecontactChange}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formNumber">
            <Form.Label>
              Phone Number
              <Form.Control
                type="number"
                name="phone"
                value={contactdata.phone}
                onChange={handlecontactChange}
              />
            </Form.Label>
          </Form.Group>
        </Form>
        <Button
          variant="primary"
          onClick={() => postCustomerContact(contactdata)}
        >
          Add Contact
        </Button>
      </div>
      <div className="content">
        <h1>All Contacts</h1>
        <div className="albumsContainer">
          {allContacts.map((contact, i) => {
            return (
              <div key={i} className="album">
                <span>{contact.name}</span>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
                <Button variant="secondary" style={{ width: "12rem" }}>
                  Delete Contact
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
