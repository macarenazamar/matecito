import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ();

//creo componente para poder crear estados y funciones que modifiquen ese estado
const CartProvider = ({children}) => {
    //creo el estado
    const [cart, setCart] = useState ([]);
    //creo funcion que setea el estado
    const addToCart = (info, cantidad) => {
        //console.log({...info, cantidad});
        if (false) {
            
        } else {
            setCart([...cart, { ...info, cantidad }])
        }
    };
    //funcion para vaciar todo el carrito
    const clearCart = () => {
        setCart([])
    };
    console.log(cart)
    //funciones que debo crear:
    //corroborar si el producto ya esta en el carrito
    //eliminar un solo producto
    //calcular total de unidades para el cart widget
    //calcular total precio
    //sumar cantidades del mismo producto
    //que los voy a pasar a traves del value 
    return (
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider