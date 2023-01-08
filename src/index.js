import React from "react";
import ReactDOM from "react-dom";
import ContextProvider from "./components/Context.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Photos from "./components/Photos";
import Cart from "./components/Cart";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          {/* <Cart></Cart> */}
          {/* <Photos></Photos> */}
          <Routes>
            <Route path="/" element={<Photos />} />
            <Route index element={<Photos />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(
  <ContextProvider component={<App></App>} />,
  document.getElementById("container")
);
