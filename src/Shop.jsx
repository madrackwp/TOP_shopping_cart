/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import ItemCard from "./ItemCard";
import Cart from "./Cart";
import "./styles/Shop.css";

function Shop({
  shopData,
  cartData,
  updateCartHandler,
  cartDeleteHandler,
  checkoutHandler,
}) {
  if (!shopData) {
    return (
      <>
        <div>Loading Items!</div>;
      </>
    );
  }

  return (
    <>
      <div className="shop-page">
        <h1>This is the shop page</h1>
        <div className="shop">
          <div className="item-library">
            {shopData.map((item) => (
              // <div key={item.id}>{item.title}</div>
              <ItemCard
                key={item.id}
                itemData={item}
                updateCartHandler={updateCartHandler}
              />
            ))}
          </div>
          <Cart
            cartData={cartData}
            cartDeleteHandler={cartDeleteHandler}
            checkoutHandler={checkoutHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
