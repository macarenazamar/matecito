import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
//import CartWidget from '../CartWidget/CartWidget';


const Carrito = () => {
  const {cart, clearCart, deleteOne, totalPrice} = useContext(CartContext);

  const total = totalPrice();
  
    
  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <h3>Cantidad: {prod.cantidad}</h3>
          <h3>Precio${prod.price}.-</h3>
          <button onClick={() => deleteOne(prod.id)}>Delete</button>
        </div>
      ))}
        <button onClick={clearCart}>Limpiar Carrito</button>
        <h4>Total: ${total}</h4>
        
    </div>
  )
}

export default Carrito