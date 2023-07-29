import React, { useContext, useEffect, useRef, useState } from "react";
import { myContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { Form, Button, ListGroup } from "react-bootstrap";
import NavBar from "../Navbar";

const Account = () => {
  const passwordResetApi = process.env.REACT_APP_CHANGE_PASS_API_KEY;
  const { removeFromLocStr, token, saveToLocStr, userAccount } =
    useContext(myContext);
  console.log(userAccount);
  const passRef = useRef();
  function changePassword() {
    const newPassword = passRef.current.value;
    fetch(passwordResetApi, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        password: newPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          saveToLocStr(data.idToken);
          alert("PASSWORD CHNAGED SUCCESSFULY");
        });
      } else {
        return res.json().then((data) => {
          let errMsg = "Authenticaton Failed";
          if (data && data.error && data.error.message) {
            errMsg = data.error.message;
          }
          alert(errMsg);
        });
      }
    });
  }
  return (
    <>
      <NavBar />
      <div className="account">
        <ListGroup>
          <ListGroup.Item>
            <h2>John Doe</h2>
          </ListGroup.Item>
          <ListGroup.Item>{userAccount.email}</ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h3>Change Password</h3>
              <Form>
                <Form.Group controlId="formBasicPassword" className="control">
                  <Form.Label className="label">Password</Form.Label>
                  <input
                    type="password"
                    ref={passRef}
                    placeholder="Password"
                  ></input>
                </Form.Group>
              </Form>
              <Button onClick={changePassword} variant="dark">
                Submit
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>

        <Button onClick={removeFromLocStr} variant="primary">
          <NavLink to="/3hrreactproject/" className="active-link">
            LogOut
          </NavLink>
        </Button>
      </div>
    </>
  );
};
export default Account;
