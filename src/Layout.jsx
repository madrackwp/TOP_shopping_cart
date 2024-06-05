/* eslint-disable react/prop-types */
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout({ itemsInCart }) {
  return (
    <div>
      <Header itemsInCart={itemsInCart} />
      <Outlet />
    </div>
  );
}

export default Layout;
