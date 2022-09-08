import React from 'react'
import Formulario from '../Formulario/Formulario';
//import CartWidget from '../CartWidget/CartWidget'
import ItemCounter from '../ItemCounter/ItemCounter';

const Carrito = () => {
    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} unidades`)
      };
  return (
    <div>
        Carrito
        <ItemCounter initial={0} stock={5} onAdd={onAdd}/>
        <Formulario/>
    </div>
  )
}

export default Carrito