import { useState, createContext } from "react";

// creamos el conextto
export const CarritoContext = createContext({
    // Aqui se almacenan los productos comprados
    carrito: [],
    total: 0,
    cantidadTotal: 0
})


// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarProducto = (item, cantidad) => {
        const productoExiste = carrito.find(prod => prod.item.id === item.id);

        if (!productoExiste) {
            // para crear un nuevo array
            setCarrito(prev => [...prev, { item, cantidad }]);
            setTotal(prev => prev + (item.precio * cantidad));
            setCantidadTotal(prev => prev + cantidad);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            // eslint-disable-next-line no-unused-vars
            setTotal(prev => (item.precio * cantidad));
            setCantidadTotal(prev => prev + cantidad);
        }
    }

    const eliminarProducto = (id) => {
        const prodEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - prodEliminado.cantidad);
        setTotal(prev => prev - (prodEliminado.item.precio * prodEliminado.cantidad));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        < CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}