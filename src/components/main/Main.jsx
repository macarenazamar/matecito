import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Carrito from '../carrito/Carrito';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import myStyles from "./main.module.css";

const Main = (props) => {
  
  return (
    <main className= {myStyles.contenedorStyle}>
      <Routes>
        <Route 
        //path es la direccion de la ruta
        //es la direccion url en la cual voy a estar parado para ver el componente que especifico en element
        // si es '/' es el home
          path='/'
        //element es la propiedad que me permite mostrar el componente que quiero ver en pantalla
          element={<ItemListContainer saludo='Un Matecito?'/>}
        />
        <Route
          path='category/:categoryId'
          element={<ItemListContainer/>}
          />
        <Route
          path='/detail/:itemId'
          element= {<ItemDetailContainer/>}/>
        <Route
          path='/carrito'
          element={<Carrito/>}/>
      </Routes>
    </main>
  )
}

export default Main;