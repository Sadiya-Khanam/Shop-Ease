import React, { useContext } from 'react';
import "./CartItems.css";
import remove_icon from "../../assets/remove.webp";
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Size</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((product) => {
        const cartItem = cartItems[product.id];
        if (cartItem?.quantity > 0) {
          return (
            <div key={product.id} className="cartitems-format cartitems-format-main">
              <img src={product.image} alt="" height="100px" />
              <p>{product.name}</p>
              <p>${product.new_price}</p>

              <div className='cartitems-quantity-controls'>
                <button
                  className="qty-btn"
                  onClick={() => removeFromCart(product.id)}
                  disabled={cartItem.quantity <= 1}
                >-</button>
                <span>{cartItem.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => addToCart(product.id, cartItem.size)}
                >+</button>
              </div>

              <p>${product.new_price * cartItem.quantity}</p>
              <p>{cartItem.size || "N/A"}</p>
              <img
                src={remove_icon}
                alt="remove"
                onClick={() => removeFromCart(product.id)}
                height="20px"
                style={{ cursor: 'pointer' }}
              />
            </div>
          );
        }
        return null;
      })}

      <hr />

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
