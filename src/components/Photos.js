import React, { useEffect, useState, useContext } from "react";
import { Context } from "./Context.js";
import Image from "./Image";
import "./styles.css";
function Photos() {
  const { photos } = useContext(Context);
  const allimgelems = photos.map((img) => <Image key={img.id} img={img} />);
  console.log(allimgelems);
  return <div className="allimg-container">{allimgelems}</div>;
}

export default Photos;
