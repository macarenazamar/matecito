import React from 'react';
import './itemDetail.css';

const ItemDetail = ({info}) => {
  return (
    <div className='itemDetail'>
      <div className='detail'>
        <img className='imgDetail' src={info.img} alt=""/>
        <div className='contenDetail'>
          <h1>{info.title}</h1>
          <h4>€ {info.price}</h4>
          <p>{info.description}</p>
        </div>

      </div>

    </div>
  )
}

export default ItemDetail