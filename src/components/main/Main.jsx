import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import myStyles from "./main.module.css";

const Main = (props) => {
  console.log(props.children);
  return (
    <main className= {myStyles.contenedorStyle}>
      <h2>Un MATECITO?</h2>
      <ItemListContainer 
        saludo='probando porpiedades' 
        fechaDia={23} 
        fechaMes={8}
        alumno={{nombre:'Macarena', entrega: 'componentes II'}}
      />

    </main>
  )
}

export default Main;