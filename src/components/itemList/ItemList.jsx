import React from 'react';
import Item from '../item/Item';
import './itemList.css';

const ItemList = ({items}) => {
  console.log('Soy los productos', items)
  
  return (
    <div>
      {items.map (item => <Item 
        key={item.id} 
        info={item}
        // img={item.img} 
        // title={item.title} 
        // stock={item.stock} 
        // price={item.price} 
      />)}

      
    </div>
  )
}

export default ItemList