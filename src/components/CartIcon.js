import React, { useState, useContext } from "react";
import { Context } from "./Context.js";
import "./faicons.css";
import "./styles.css";
import "./googleicon.css";
function Photos() {
  const { toggleFavourite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );
  return (
    <div>
      <div>
        <i className="material-symbols-outlined">shopping_cart</i>
        <p className="cart-number">{cartItems.length}</p>
      </div>
    </div>
  );
}

export default Photos;
