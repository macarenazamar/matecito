import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCounter from '../ItemCounter/ItemCounter';
import './itemDetail.css';

const ItemDetail = ({info}) => {

  const [cant, setCant] = useState()

  const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`)
    setCant(cantidad)
  };

  return (
    <div className='itemDetail'>
      <div className='detail'>
        <img className='imgDetail' src={info.img} alt=""/>
        <div className='contenDetail'>
          <h1>{info.title}</h1>
          <h4>€ {info.price}</h4>
          <p>{info.description}</p>
        </div>
        <ItemCounter initial={0} stock={info.stock} onAdd={onAdd}/>
        <div>
          {cant === 0
            ? <ItemCounter initial={0} stock={info.stock} onAdd={onAdd}/>
            : <Link to='/carrito'>Ir al carrito</Link>
          }
        </div>
        
      </div>

    </div>
  )
}

export default ItemDetail