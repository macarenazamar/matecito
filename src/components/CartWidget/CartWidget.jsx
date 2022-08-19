import React from 'react'
import estilos from './cartWidget.module.css'
import {FiShoppingCart} from 'react-icons/fi'

const CartWidget = () => {
  return (
    <div className={estilos.contenedorStyle}>
      <FiShoppingCart size={30}/>
      
    </div>
  )
}

export default CartWidget