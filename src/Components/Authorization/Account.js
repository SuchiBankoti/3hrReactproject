import React, { useContext } from "react";
import { myContext } from "../../Context";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Account = () => {
  const { removeFromLocStr } = useContext(myContext);
  return (
    <div className="account">
      <div>Orders</div>
      <div>
        <div>Name</div>
        <div>email</div>
      </div>
      <div>Change password</div>
      <Button onClick={removeFromLocStr} variant="primary">
        <NavLink to="/3hrreactproject/" className="active-link">
          LogOut
        </NavLink>
      </Button>
    </div>
  );
};
export default Account;
