import { useContext } from "react"
import { CarritoContext } from '../../context/Context'
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);


  // Retorno temprano
  if (cantidadTotal === 0) {
    return (
      <>
        <div className="sinProductos">
          <h2>Oh no!!!</h2>
          <h2> No hay productos en tu carrito </h2>
          <p>Continúa comprando</p>
          <div className="boxSeguir">
            <Link to={"/"} className="btnCompra" > Ver más productos </Link>
            <img className="imgSinProductos" src="/imagenes/seguirComprando.png" alt="" />
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="cart">
      <h2 className="detalleTitulo"> Este es el detalle de tu compra </h2>
      <div className="cartPadreDetalle">
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      </div>
      <div className="detalleTotal">
        <h3> Total $ {total} </h3>
        <h3> Cantidad total: {cantidadTotal} </h3>
        <button onClick={() => vaciarCarrito()} className="btnVaciar" > Vaciar Carrito </button>
        <Link to={"/checkout"} className="btnFinCompra" > Finalizar compra </Link>
      </div>
    </section>
  )
}

export default Cart