import React from 'react';
import Navbar from '../Nav/Navbar';
import myStyles from './header.module.css'

const Header = () => {
  return (
    <header className={myStyles.contenedorStyle}>
        <Navbar />            
    </header>
  )
};

export default Header;