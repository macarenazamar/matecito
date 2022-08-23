import React, { useState, useEffect } from 'react'
import './itemCounter.css'

const ItemCounter = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));


    const restar = () => {
        setCount(count - 1);
    }

    const sumar = () => {
        count < stock ? setCount(count + 1) : alert ('No hay mas stock');
    }

    useEffect(() =>{
        setCount(parseInt(initial));
    },[initial])


  return (
    <div className='counter'>
        <button disabled={count <= 0} onClick={restar}>-</button>
        <p>Cantiad de articulos: {count}</p>
        <button onClick={sumar}>+</button>
        <div>
            <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCounter


//import React, { useState } from 'react'

// const Counter = () => {

//     const [count, setCount] = useState(0);

//     let tope = 5

//     const sumar = () => {
//         //if else
//         // if (count < tope) {
//         //     setCount(count + 1);
//         // } else {
//         //     alert ('No hay mas stock');
//         // }
//         //ternario
//         count < tope ? setCount(count + 1) : alert ('No hay mas stock');
//     };

//     const restar = () => {
//         setCount(count - 1);

//     };

//   return (
//     <div>
//         <button onClick={sumar}>+</button>
//         <p>Cantiad de articulos: {count}</p>
//         <button>Agregar al carrito</button>
//         <button onClick={restar}>-</button>
//     </div>
//   )
// }

// export default Counter