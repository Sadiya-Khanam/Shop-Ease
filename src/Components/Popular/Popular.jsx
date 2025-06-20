// Popular.jsx
import React from 'react';
import './Popular.css';
import Item from '../Item/Item';
import all_product from '../../assets/all_product';

const Popular = () => {
  const popularItems = all_product.filter(
    (item) => item.tags?.includes('popular') && item.category === 'women'
  );

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {popularItems.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
