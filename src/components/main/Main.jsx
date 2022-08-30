import React from 'react';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import myStyles from "./main.module.css";

const Main = (props) => {
  console.log(props.children);
  return (
    <main className= {myStyles.contenedorStyle}>
      <h2>Un MATECITO?</h2>
      <ItemListContainer 
        saludo='Clase Promises, Asincronia y MAP' 
        
      />

    </main>
  )
}

export default Main;