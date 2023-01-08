import React from "react";
import CartIcon from "./CartIcon.js";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="link">
        Pic Some
      </Link>
      <Link to="/cart">
        <CartIcon />
      </Link>
      <Outlet />
    </div>
  );
}
export default Header;
