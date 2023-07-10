import { useContext } from "react"
import { CarritoContext } from '../../context/context'
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if(cantidadTotal === 0) {
        return (
            <>
            <h2> No hay productos en el carrito </h2>
            <Link to={"/tienda"}> Ver productos </Link>
            </>
        )
    }

  return (
    // se muestra detalles de la compra en el carrito
    <div>
      <h2> Detalle de la compra </h2>
        {carrito.map(producto => <CartItem key = {producto.id } {...producto} />)}
        <h3> Total $ {total} </h3>
        <h3> Cantidad total: {cantidadTotal} </h3>
        <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
        {/* checkout = envia al formulario con los datos del cliente */}
        <Link to={"/checkout"}> Finalizar compra </Link>
    </div>
  )
}

export default Cart