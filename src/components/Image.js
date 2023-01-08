import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import "./faicons.css";
import { Context } from "./Context";
import "./googleicon.css";
import PropTypes from "prop-types";
function Image(props) {
  const { toggleFavourite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );
  const [hovered, setHovered] = useState(false);
  const isFav = props.img.isFavorite;
  let inCart;
  if (cartItems.includes(props.img)) {
    inCart = true;
  } else {
    inCart = false;
  }
  function hoverEnter() {
    setHovered(true);
    console.log("hovering");
  }
  function hoverLeave() {
    setHovered(false);
  }
  return (
    <div
      className="image-container"
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
    >
      <img src={props.img.url} alt="item" />
      <div className="icon-container">
        {isFav ? (
          <i
            onClick={() => {
              toggleFavourite(props.img.id);
            }}
            className="material-icons red"
          >
            favorite
          </i>
        ) : (
          hovered && (
            <i
              onClick={() => {
                toggleFavourite(props.img.id);
              }}
              className="material-symbols-outlined hoverred"
            >
              favorite
            </i>
          )
        )}
        {inCart ? (
          <i
            onClick={() => {
              removeFromCart(props.img);
            }}
            className="material-icons green"
          >
            shopping_cart
          </i>
        ) : (
          hovered && (
            <i
              onClick={() => {
                addToCart(props.img);
              }}
              className="material-symbols-outlined hovergreen"
            >
              add_shopping_cart
            </i>
          )
        )}
      </div>
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool
  })
};
export default Image;
