import React, { useEffect, useState } from 'react';
import ItemCounter from '../itemCounter/ItemCounter';
import ItemList from '../itemList/ItemList';
import {myProducts} from '../../mock/myProducts';
import myStyles from './itemListContainer.module.css';

const ItemListContainer = (greeting) => {
    const saludo = greeting.saludo;

    const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`)
  }; 

    //hook que me permite guardar los productos
    const [items, setItems] = useState ([])

    //Primero renderiza luego viene al useEffect
    useEffect (() =>{
      const getMyProducts = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(myProducts), 2000)
      });

      getMyProducts ()
        .then(myProducts => setItems(myProducts))
        .catch(error => console.error(error))
    }, [])    

  return (
    <div className={myStyles.contenedorStyle}>
      <h3> Hola! </h3>
      <p>{saludo}</p>
      <ItemCounter initial={0} stock={5} onAdd={onAdd}/>
      <ItemList items={items}/>
      

    </div>
  )
}

export default ItemListContainer