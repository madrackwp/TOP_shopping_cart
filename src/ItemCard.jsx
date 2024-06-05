/* eslint-disable react/prop-types */
function ItemCard({ itemData, updateCartHandler }) {
  function addItemHandler() {
    // console.log(`I'm in the item card ${itemData}`);
    updateCartHandler(itemData);
  }

  return (
    <div className="item-card">
      <img src={itemData.image} alt="item-pic"></img>
      <h2>{itemData.title}</h2>
      <p>Price: ${itemData.price}</p>
      <button onClick={addItemHandler}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
