import React from 'react'
import myStyles from './ulInicio.module.css';


const UlInicio = () => {
  return (
    <ul className={myStyles.contenedorStyle}>
        <li className='liInicio'>
            <a className='aInicio' href="https://google.com">Productos</a>
        </li>
        <li className='liInicio'>
            <a className='aInicio' href="https://google.com">Nosotros</a>
        </li>
        <li className='liInicio'>
            <a className='aInicio' href="https://google.com">Contactos</a>
        </li>
    </ul>
  )
}

export default UlInicio