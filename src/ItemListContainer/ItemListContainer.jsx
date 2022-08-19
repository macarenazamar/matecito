import React from 'react'
import myStyles from './itemListContainer.module.css'

const ItemListContainer = (greeting) => {
  //console.log(greeting.test);
  const saludo = greeting.saludo
  const {fechaMes} = greeting
  
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

    </div>
  )
}

export default ItemListContainer