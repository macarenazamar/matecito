import React from 'react'
import estilos from './ulInicio.module.css';


const UlInicio = () => {
  return (
    <ul className={estilos.contenedorStyle}>
        <li>
            <a href="https://google.com">Productos</a>
        </li>
        <li>
            <a href="https://google.com">Nosotros</a>
        </li>
        <li>
            <a href="https://google.com">Contactos</a>
        </li>
    </ul>
  )
}

export default UlInicio