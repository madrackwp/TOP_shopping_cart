/* eslint-disable react/prop-types */
function CartItem({ itemData, itemCount, cartDeleteHandler }) {
  // console.log(itemData);
  // console.log(itemCount);
  function removeHandler() {
    cartDeleteHandler(itemData.id);
  }

  return (
    <div className="cart-item">
      <img src={itemData.image} alt="" />
      <p>
        {itemCount}x {itemData.title}
      </p>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
}

export default CartItem;
