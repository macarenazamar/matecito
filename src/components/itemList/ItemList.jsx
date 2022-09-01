import React from 'react';
import Item from '../item/Item';
import './itemList.css';


const ItemList = ({items}) => {
    //console.log('Soy los producots', items)
    
    //cuando hago esto me aparece el error
    items.map(item => console.log(item))  

  return (
    <div className='itemListContenedor'>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt=""/>
            <h4>${item.title}</h4>
            <p>${item.price}</p>

          </div>
        );
      })}
        
    </div>
  )
}

export default ItemList

