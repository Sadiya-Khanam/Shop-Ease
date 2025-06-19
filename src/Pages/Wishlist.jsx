/*import React, { useContext } from 'react';

import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, all_product, toggleWishlistItem } = useContext(ShopContext);

  const wishlistProducts = all_product.filter(product => wishlistItems.includes(product.id));

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlistProducts.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        wishlistProducts.map(product => (
          <div key={product.id} className="wishlist-item">
            <img src={product.image} alt={product.name} height="100" />
            <p>{product.name}</p>
            <p>${product.new_price}</p>
            <button onClick={() => toggleWishlistItem(product.id)}>Remove</button>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;*/


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Wishlist.css'; // You can add extra styles here if needed
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, all_product, removeFromWishlist } = useContext(ShopContext);

  const wishlistProducts = all_product.filter(product =>
    wishlistItems.includes(product.id)
  );

  return (
    <main className="wishlist-container">
      <h2 className="text-center mb-2">My Wishlist </h2>

      {wishlistProducts.length === 0 ? (
        <div className="wishlist-empty">
          <p>Your wishlist is empty.</p>
          <Link to="/" className="btn mt-2">Start Shopping</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistProducts.map(product => (
            <div key={product.id} className="card wishlist-card">
              <img src={product.image} alt={product.name} className="wishlist-img" />
              <h3>{product.name}</h3>
              <p className="text-sm">${product.new_price}</p>
              <div className="wishlist-actions">
                <Link to={`/product/${product.id}`} className="btn">View</Link>
                <button className="btn" onClick={() => removeFromWishlist(product.id)}>
                  Remove 
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Wishlist;



