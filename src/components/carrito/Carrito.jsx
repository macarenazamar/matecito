import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Formulario from '../Formulario/Formulario';
//import CartWidget from '../CartWidget/CartWidget';


const Carrito = () => {
  const {clearCart} = useContext(CartContext);
  
    
  return (
    <div>
        <button onClick={clearCart}>Limpiar Carrito</button>
        <Formulario/>
    </div>
  )
}

export default Carrito