import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

const unProduct = {
  id: '2',
  title: 'YERBA Playadito 1 kg',
  description: 'luego lo vemos tengo que inventar ',
  price: 8.55,
  stock: 10,
  category: 'YerbaMate',
  img: 'https://res.cloudinary.com/dcq7kiayd/image/upload/v1661242033/matecito/playadito1kg534x1064_tvv83u.webp',
}

const ItemDetailContainer = () => {

  const [info, setInfo] = useState ({})

    useEffect(()=>{
      const getInfoUnProduct = new Promise(resolve =>{
        setTimeout(() =>{
          resolve(unProduct);
        }, 2000);
      });
      getInfoUnProduct.then(res => setInfo(res));
    }, [])

  //const unProduct = products.find((unProduct)=> myProducts.id === 2)

  return (
    <div className='itemDetailContainer'>
        <ItemDetail info={info}/>
    </div>
  )
}

export default ItemDetailContainer