import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter';
import './itemDetail.css';

const ItemDetail = ({info}) => {
  const [cantidad, setCantidad] = useState()

  const { addToCart } = useContext(CartContext);

  const onAdd = (compra) => {
    alert(`Compraste ${compra} unidades`)
    setCantidad(compra);
    addToCart(info, compra);
  };

  return (
    <div className='itemDetail'>
      <div className='detail'>
        <img className='imgDetail' src={info.img} alt=""/>
        <div className='contenDetail'>
          <h1>{info.title}</h1>
          <h4>€ {info.price}</h4>
          <p>{info.description}</p>
          <ItemCounter initial={0} stock={info.stock} onAdd={onAdd}/>
          {cantidad === 0 ? (
            <ItemCounter initial={0} stock={info.stock} onAdd={onAdd}/>
          ) : (
            <Link to='/carrito'>Ir al carrito</Link>
          )}
        </div>
        
      </div>

    </div>
  )
}

export default ItemDetail