import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import UlInicio from '../ulInicio/UlInicio'
import myStyles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={myStyles.contenedorStyle}>
        <h1 className='titulo'>BIENVENIDOS A MATECITO</h1>
        <CartWidget />
        <UlInicio />
    </nav>
  )
}

export default Navbar