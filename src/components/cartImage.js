import React, { useContext } from "react";
import "./styles.css";
import "./googleicon.css";
import { Context } from "./Context";
function CartImage(props) {
  const { removeFromCart } = useContext(Context);
  const cost = 5.99;

  return (
    <div className="cart-image-container">
      <img src={props.img.url} alt="item" />
      <p>
        Price:{" "}
        {cost.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <i
        onClick={() => {
          removeFromCart(props.img);
        }}
        className="material-symbols-outlined"
      >
        delete
      </i>
    </div>
  );
}
export default CartImage;
