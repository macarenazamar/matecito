import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/ItemList';
import {myProducts} from '../../mock/myProducts';
import myStyles from './itemListContainer.module.css';

const ItemListContainer = (greeting) => {
    const saludo = greeting.saludo;

    //hook de react-router-dom que lee solo el parametro dinamico, el que va despues de los :
    //const parametroURL = useParams()
    //solo lo vemos si estoy en itemListContainer
    //console.log('parametroURL: ', parametroURL.categoryId) 
    const { categoryId } = useParams();
    

    //hook que me permite guardar los productos
    const [items, setItems] = useState ([])

    //Primero renderiza luego viene al useEffect
    useEffect (() => {
      const getMyProducts = () => 
        new Promise((resolve, reject) => {
          const productoFiltrado = myProducts.filter(
            (prod) => prod.category === categoryId
          );
        setTimeout(()=> {
          resolve(categoryId ? productoFiltrado : myProducts);
        }, 2000);
      });

      getMyProducts ()
        .then(myProducts => setItems(myProducts))
        .catch(error => console.error(error))
    }, [categoryId])    

  return (
    <div className={myStyles.contenedorStyle}>
      <h4>{saludo}</h4>
      
      <ItemList items={items}/>
      
      

    </div>
  )
}

export default ItemListContainer