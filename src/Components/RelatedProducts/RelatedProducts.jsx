import React from 'react';
import './RealatedProducts.css';
import Item from '../Item/Item';
import all_product from '../../assets/all_product';

const RelatedProducts = ({ currentProduct }) => {
  const relatedItems = all_product
    .filter(
      (item) =>
        item.category === currentProduct.category && item.id !== currentProduct.id
    )
    .slice(0, 4); // You can change 4 to show more/less

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        {relatedItems.length > 0 ? (
          relatedItems.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p style={{ padding: '1rem', color: '#555' }}>
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
