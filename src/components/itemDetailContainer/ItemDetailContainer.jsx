import React from 'react'
import { useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const [unProduct, setUnProduct] = useState ({})

  //const unProd = products.find((unProduct)=> myProducts.id === 2)



  return (
    <div className='itemDetailContainer'>
        <ItemDetail unProd={unProd}/>
    </div>
  )
}

export default ItemDetailContainer