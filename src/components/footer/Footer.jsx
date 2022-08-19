import React from 'react';
import UlInicio from '../UlInicio/UlInicio';
import myStyles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={myStyles.contenedorStyle}>
      <h5>Recorrido del sitio</h5>
      <UlInicio />
      <h5>By MATECITO</h5>
    </footer>
  )
};

export default Footer;