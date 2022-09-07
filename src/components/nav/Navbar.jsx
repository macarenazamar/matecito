import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import UlInicio from '../ulInicio/UlInicio'
import myStyles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={myStyles.contenedorStyle}>
      <Link to='/' className='titulo'>
          <h1 className='titulo'>BIENVENIDOS A MATECITO</h1>
      </Link>
      <Link to='/carrito'>
        <CartWidget/>
      </Link>
        <UlInicio />
    </nav>
  )
}

export default Navbar