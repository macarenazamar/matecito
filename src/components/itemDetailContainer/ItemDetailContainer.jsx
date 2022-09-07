import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import ItemCounter from '../itemCounter/ItemCounter';
import { useParams } from 'react-router-dom';
import { myProducts } from '../../mock/myProducts';


const ItemDetailContainer = () => {
  const {itemId} = useParams();

  const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`)
  };

  const [info, setInfo] = useState ({})

    useEffect(()=>{
      const getInfoUnProduct = () =>
        new Promise ((resolve, reject) => {
          const unProduct = myProducts.find(
            (prod) => prod.id === itemId);
          setTimeout(() => {
            resolve(itemId ? unProduct : myProducts);
        }, 2000);
      });
      getInfoUnProduct.then(res => setInfo(res));
    }, [itemId])

  //const unProduct = products.find((unProduct)=> myProducts.id === 2)

  return (
    <div className='itemDetailContainer'>
        <ItemDetail info={info}/>
        <ItemCounter initial={0} stock={5} onAdd={onAdd}/>
        
    </div>
  )
}

export default ItemDetailContainer