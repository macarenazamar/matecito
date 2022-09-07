import React from 'react'
import { Link } from 'react-router-dom';
import myStyles from './ulInicio.module.css';


const UlInicio = () => {
  return (
    <ul className={myStyles.contenedorStyle}>
      <Link to={'/category/YerbaMate'} className='aInicio'>Yerbas</Link>
      <Link to={'/category/Termos'} className='aInicio'>Termos</Link>
      <Link to={'/category/Mates'} className='aInicio'>Mates</Link>
      
    </ul>
  )
}

export default UlInicio