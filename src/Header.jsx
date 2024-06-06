/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header({ itemsInCart }) {
  console.log(itemsInCart);
  let count = 0;

  const cartEntries = Object.entries(itemsInCart);
  cartEntries.map((value, key) => (count += value[1].count));

  return (
    <header className="main-header">
      <h1>Racky's Wares</h1>
      <nav>
        <ul>
          <li>
            <button type="button" aria-label="home-button">
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button type="button" aria-label="shop-button">
              <Link to="/shop">Shop</Link>
            </button>
          </li>
          <li>
            <button type="button" aria-label="shop-cart">
              <Link to="/shop">Shopping Cart ({count})</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
