import React from 'react';
import Navbar from '../nav/Navbar';
import estilos from './header.module.css'

const Header = () => {
  return (
    <header className={estilos.contenedorStyle}>
        <Navbar />            
    </header>
  )
};

export default Header;