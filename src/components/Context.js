import React, { useEffect, useState } from "react";
import axios from "axios";
const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, addCartItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((img) => {
        setPhotos(img.data);
      });
  }, []);
  function addToCart(item) {
    addCartItems([...cartItems, item]);
    console.log(cartItems);
  }
  function removeFromCart(item) {
    const tempcart = cartItems;
    const index = tempcart.indexOf(item);
    tempcart.splice(index, 1);
    addCartItems([...tempcart]);
  }
  console.log(cartItems);
  function toggleFavourite(imgid) {
    const photostemp = photos;
    const fav = photostemp.findIndex((img) => img.id == imgid);
    photostemp[fav].isFavorite = !photostemp[fav].isFavorite;
    console.log(fav);
    setPhotos([...photostemp]);
  }
  function emptyCart() {
    addCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavourite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart
      }}
    >
      {props.component}
    </Context.Provider>
  );
}
export { Context };
export default ContextProvider;
