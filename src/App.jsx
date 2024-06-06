import { useState, useEffect, useLayoutEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import "./styles/index.css";
import Layout from "./Layout";

function App() {
  const [cartItems, setCartItems] = useState({});

  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function checkout() {
    let checkoutMessage = "You are checking out with:\n";
    const cartEntries = Object.entries(cartItems);
    cartEntries.forEach((value, key) => {
      // console.log(value, key);
      console.log(value[1].count);
      console.log(value[1].item.title);
      checkoutMessage =
        checkoutMessage + value[1].count + " x " + value[1].item.title + "\n";
    });

    alert(checkoutMessage);
  }

  function removeItemFromCart(itemID) {
    console.log(`Trying to remove: ${itemID}`);
    const oldCartItems = { ...cartItems };

    delete oldCartItems[itemID];

    setCartItems(oldCartItems);
  }

  function updateCart(updateData) {
    const oldCartItems = { ...cartItems };
    //We check if updateData exists in the oldCartItems
    if (updateData.id in oldCartItems) {
      oldCartItems[updateData.id].count += 1;
    } else {
      oldCartItems[updateData.id] = { item: updateData, count: 1 };
    }
    // oldCartItems.push(updateData);
    setCartItems(oldCartItems);
  }

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=15"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setShopData(result);
        // console.log("Shop data received!");
        // console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // console.log(shopData);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout itemsInCart={cartItems} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: (
            <Shop
              shopData={shopData}
              cartData={cartItems}
              updateCartHandler={updateCart}
              cartDeleteHandler={removeItemFromCart}
              checkoutHandler={checkout}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
