import React, { useEffect, useState } from 'react';
import ItemCounter from '../itemCounter/ItemCounter';
import myStyles from './itemListContainer.module.css';
import { myProductos } from '../../mock/myProducts';
import ItemList from '../itemList/ItemList';

const ItemListContainer = (greeting) => {
  //console.log(greeting.test);
  const saludo = greeting.saludo;

  const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`)
  };

  //hook que me permite guardar los productos, lu uso en el then
  const [items, setItems] = useState ([])

  //Primero renderiza y luego viene al useEffect
    useEffect (() => {
      const getMyProducts = new Promise ((res, rej) => {
        setTimeout (() => {
          res (myProductos);
        }, 2000);
      });
    
      getMyProducts
        .then((products) =>{
        setItems(products);
      })
        .catch((error) =>{
          console.error(error);
        })
        .finally(() =>{
          console.log('finally: ');
          //se ejecuta si o si, en teria despues del then y el catch, pero no siempre
        });
    }, []);
  

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