/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import "./styles/Shop.css";

function Cart({ cartData, cartDeleteHandler, checkoutHandler }) {
  // console.log(cartData);
  // return <div>Hello</div>;

  if (Object.keys(cartData).length === 0) {
    return <div className="shop-cart">No items in cart!</div>;
  }

  const cartEntries = Object.entries(cartData);

  return (
    <div className="shop-cart">
      {cartEntries.map((value, key) => (
        <CartItem
          key={key}
          itemData={value[1].item}
          itemCount={value[1].count}
          cartDeleteHandler={cartDeleteHandler}
        />
      ))}
      <button onClick={checkoutHandler}>Check Out</button>
    </div>
  );
}

export default Cart;
