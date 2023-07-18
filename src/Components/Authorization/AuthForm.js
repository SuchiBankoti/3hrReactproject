import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../../Context";
import { Button, Form } from "react-bootstrap";
const signINapi = process.env.REACT_APP_SIGN_IN_API_KEY;
const AuthForm = () => {
  const { saveToLocStr } = useContext(myContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    fetch(signINapi, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          saveToLocStr(data.idToken);
        });
      } else {
        res.json().then((data) => {
          let errMsg = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errMsg = data.error.message;
          }
          alert(errMsg);
        });
      }
    });
  }
  return (
    <section className="auth">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail" className="control">
          <Form.Label className="label">Email</Form.Label>
          <input type="email" ref={emailInputRef} placeholder="Email"></input>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="control">
          <Form.Label className="label">Password</Form.Label>
          <input
            type="password"
            ref={passwordInputRef}
            placeholder="Password"
          ></input>
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit} variant="primary">
        <NavLink to="/3hrreactproject/home" className="active-link">
          Login
        </NavLink>
      </Button>
    </section>
  );
};

export default AuthForm;
