import React from 'react';
import './item.css';

const Item = ({info}) => {
  console.log(info)
  return (
    <div className='itemStyle'>
      <h4>{info.title}</h4>
      <div>
        <img className='imgProduct' src={info.img} 
          alt={`Imagen del producto ${info.title}`}/>
      </div>
      <p>€ {info.price} </p>

    </div>
  )
}

export default Item