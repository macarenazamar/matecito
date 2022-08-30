import React from 'react'
import Item from '../item/Item'

const ItemList = () => {
  return (
    <div>
        {Item.map(item => <Item 
        key={item.id}
        img={item.img} 
        title={item.title}
        />

      )}
    </div>
  )
}

export default ItemList