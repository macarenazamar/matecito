import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ();

//creo componente para poder crear estados y funciones que modifiquen ese estado
const CartProvider = ({children}) => {
    //creo el estado
    const [cart, setCart] = useState ([]);

    //creo funcion que setea el estado
    const addToCart = (info, cantidad) => {
        if (isInCart(info.id)) {
            //lo encuentro y le sumo la cantidad
            totalQuantitySingleProduct(info, cantidad);
        } else {
            setCart([...cart, { ...info, cantidad }])
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)
     const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    //sumar cantidad del mismo producto
    const totalQuantitySingleProduct = (info, cantidad) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === info.id) {
                const productUpdated = {
                    ...prod,
                    cantidad: cantidad,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    //calcular total de unidades para el cart widget
    const totalQuantity = () => {};

    //calcular total precio del carrito
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    //eliminar un solo producto pasandole el id
    const deleteOne = (id) => {

        const filteredProducts = cart.filter((prod) => prod.id !== id);
        setCart(filteredProducts);
    };

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            deleteOne,
            totalPrice,
            totalQuantity,
            getProductQuantity,
        }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider