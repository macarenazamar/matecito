import React from 'react';
import './item.css';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  //console.log(info)
  const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`)
  };
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
      <ItemCounter initial={0} stock={info.stock} onAdd={onAdd}/>

    </div>
  )
}

export default Item