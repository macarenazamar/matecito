import React from 'react'
import ItemCounter from '../itemCounter/ItemCounter'
import myStyles from './itemListContainer.module.css'

const ItemListContainer = (greeting) => {
  //console.log(greeting.test);
  const saludo = greeting.saludo
  const {fechaMes} = greeting

  const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`)
  }
  
  return (
    <div className={myStyles.contenedorStyle}>
      <h3> Hola! {saludo}     
      </h3>
      <p>
        Hoy es {greeting.fechaDia}/{fechaMes} 
      </p>
      <p>
      Alumno: {greeting.alumno.nombre} Entregable de clase: {greeting.alumno.entrega}
      </p>
      <ItemCounter initial={0} stock={5} onAdd={onAdd}/>

    </div>
  )
}

export default ItemListContainer