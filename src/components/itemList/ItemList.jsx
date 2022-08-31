import React from 'react';
import Item from '../item/Item';
import './itemList.css';


const ItemList = (items) => {
    console.log('Soy los producots', items)
    //cuando hago esto me aparece el error
    items.map(dataProduct => console.log(dataProduct))

  return (
    <div className='itemListContenedor'>
        <Item/>
    </div>
  )
}

export default ItemList