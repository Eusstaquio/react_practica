import { Children, createContext, useEffect, useState } from "react";
import arrayProductos from "../productos.json";


export const CartContext = createContext()

export default function CartContextProvider ({ children}) {

    const [carrito, setcarrito] = useState([]);
    const [showToast, setShowToast] = useState(false);

    const agregarProductos = (id) =>{

        const producto = arrayProductos.find(producto => producto.id == id)
        let comprobacionProducto = carrito.find(element => element.id == producto.id)

        if(comprobacionProducto){
            return setShowToast(true);
        } else{
            setcarrito([...carrito, producto])
        }
    }

    const eliminarProducto =(id) =>{
        setcarrito(carrito.filter(producto => producto.id !== id))
    }
    
    const totalProductos = () =>{}

    const numeroCarrito = () => {
        const numeroMostrado = carrito.length
        return numeroMostrado
    }

    const vaciarCarrito =() =>{
        setcarrito([])
    }

    
    return(
    <CartContext.Provider value={{carrito, showToast, setShowToast, numeroCarrito, agregarProductos, totalProductos, vaciarCarrito, eliminarProducto}}>
        {children}
    </CartContext.Provider>
    )
}