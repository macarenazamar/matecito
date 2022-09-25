import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  
  return (
    <div className='itemStyle'>
      <Link to={`/detail/${info.id}`}>
        <div>
          <img className='imgProduct' src={info.img} 
            alt={`Imagen del producto ${info.title}`}/>
        </div>
        <div className='infoProduct'>
          <h3>{info.title}</h3>
          <p>€ {info.price} </p>
        </div>
      </Link>

    </div>
  )
}

export default Item