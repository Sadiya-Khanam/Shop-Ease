import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

// Create initial cart with quantity and size
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = { quantity: 0, size: null };
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
 const [wishlistItems, setWishlistItems] = useState([]);


  // Add to cart with optional size
  const addToCart = (itemId, size = null) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: prev[itemId].quantity + 1,
        size: size || prev[itemId].size,
      },
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: Math.max(prev[itemId].quantity - 1, 0),
      },
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item].quantity;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        totalItems += cartItems[item].quantity;
      }
    }
    return totalItems;
  };

  const addToWishlist = (id) => {
  setWishlistItems((prev) => (!prev.includes(id) ? [...prev, id] : prev));
};

const removeFromWishlist = (id) => {
  setWishlistItems((prev) => prev.filter((item) => item !== id));
};

const isInWishlist = (itemId) => wishlistItems.includes(itemId);

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
