import React, { useContext, useEffect } from "react";
import CartImage from "./cartImage.js";
import { Context } from "./Context.js";
import "./styles.css";
import "./googleicon.css";
function Cart() {
  const cost = 5.99;
  const { cartItems, addToCart, emptyCart } = useContext(Context);
  const allimgelems = cartItems.map((img) => (
    <CartImage key={img.id} img={img} />
  ));

  const totalcost = cartItems.length * cost;

  var element = "Place Order";
  function placeOrder(e) {
    e.target.value = "Ordering...";
    const ee = e.target;
    setTimeout(() => {
      emptyCart();
      changetext(ee);
      alert("Order Placed");
    }, 3000);
  }
  function changetext(e) {
    e.value = "Place Order";
  }
  return (
    <div>
      <div className="cartstuff">
        <h1>Cart ({cartItems.length})</h1>
        <button
          onClick={emptyCart}
          onMouseEnter={(e) => {
            e.target.innerHTML = "delete_forever";
          }}
          onMouseLeave={(e) => {
            e.target.innerHTML = "delete_sweep";
          }}
          className="material-symbols-outlined clearcart"
        >
          delete_sweep
        </button>
      </div>
      {allimgelems}
      <div className="cartpadding"></div>
      <p className="totalcost">
        Total Cost:{" "}
        {totalcost.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
        {cartItems != 0 && (
          <input
            type="button"
            onClick={placeOrder}
            value={element}
            className="placeorder"
          />
        )}
      </p>
    </div>
  );
}
export default Cart;
