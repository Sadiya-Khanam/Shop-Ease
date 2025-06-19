import React from 'react'
import "./NewCollections.css"
import all_product from '../../assets/all_product'
import Item from '../Item/Item'

const NewCollections = () => {
  const newItems = all_product.filter(
    (item) => item.tags?.includes("new")
  );

  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {newItems.map((item, i) => (
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
  )
}

export default NewCollections
