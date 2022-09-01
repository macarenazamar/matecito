import React from 'react';
import Item from '../item/Item';
import './itemList.css';


const ItemList = ({items}) => {
    //console.log('Soy los producots', items)
    
    //cuando hago esto me aparece el error
    items.map(item => console.log(item.title))  

  return (
    <div className='itemListContenedor'>
     
    
    </div>
  )
}

export default ItemList

