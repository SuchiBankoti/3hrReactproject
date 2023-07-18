import { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../../Context";
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
    <section>
      <form>
        <label>Email</label>
        <input type="email" ref={emailInputRef}></input>
        <label>Password</label>
        <input type="password" ref={passwordInputRef}></input>
      </form>
      <button onClick={handleSubmit}>
        <NavLink to="/3hrreactproject/" className="active-link">
          {" "}
          Login
        </NavLink>
      </button>
    </section>
  );
};

export default AuthForm;
