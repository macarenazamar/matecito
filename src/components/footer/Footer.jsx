import React from 'react';
import UlInicio from '../ulInicio/UlInicio';
import estilos from './footer.module.css';

const Footer = () => {
  return (
    <footer className={estilos.contenedorStyle}>
      <h5>Recorrido del sitio</h5>
      <UlInicio />
      <h5>By MATECITO</h5>
    </footer>
  )
};

export default Footer;