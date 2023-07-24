import { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../../Context";
import { Button, Form } from "react-bootstrap";
const signINapi = process.env.REACT_APP_SIGN_IN_API_KEY;
const signUPapi = process.env.REACT_APP_SIGN_UP_API_KEY;
const AuthForm = () => {
  const { saveToLocStr, setuserMail, removeFromLocStr } = useContext(myContext);
  const [IsNewUser, setIsNewUser] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (!IsNewUser) {
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
            setuserMail(data.email);
            setIsNewUser(false);
            // saveUserId// fetch req post for cart and orders and save id from res data
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
    } else {
      fetch(signUPapi, {
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
            setuserMail(data.email);
          });
          alert(
            "ACCOUNT CREATED, you will be logged out automatically in 5 minutes"
          );
          setTimeout(() => {
            removeFromLocStr();
          }, 300000);
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
  }
  return (
    <section className="auth">
      {IsNewUser ? <h1>Create Account</h1> : <h1>Login</h1>}
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
      {!IsNewUser ? (
        <>
          <Button onClick={handleSubmit} variant="primary">
            <NavLink to="/3hrreactproject/home" className="active-link">
              Login
            </NavLink>
          </Button>
          <Button>
            <p>New here</p>
            <b onClick={() => setIsNewUser(true)}>Create Account</b>
          </Button>
        </>
      ) : (
        <Button onClick={handleSubmit} variant="primary">
          <NavLink to="/3hrreactproject/home" className="active-link">
            Sign Up
          </NavLink>
        </Button>
      )}
    </section>
  );
};

export default AuthForm;
