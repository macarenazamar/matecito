import React from 'react'
//import CartWidget from '../CartWidget/CartWidget'
import ItemCounter from '../itemCounter/ItemCounter'

const Carrito = () => {
    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} unidades`)
      };
  return (
    <div>
        Carrito
        <ItemCounter initial={0} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default Carrito