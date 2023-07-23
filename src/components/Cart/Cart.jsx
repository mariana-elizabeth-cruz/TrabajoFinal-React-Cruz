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
        <Link to={"/"} className="btnCompra" > Ver más productos </Link>
      </div>
        
      </>
    )
  }

  return (
    <section className="sectionPadreDetalle" >
      <h2 className="detalleTitulo"> Detalle de su compra </h2>
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <div className="detalleTotal">
        <h3> Total $ {total} </h3>
        <h3> Cantidad total: {cantidadTotal} </h3>
        <div>
          <button onClick={() => vaciarCarrito()} className="btnVaciar" > Vaciar Carrito </button>
        </div>
        <Link to={"/checkout"} className="btnCompra" > Finalizar compra </Link>
      </div>

    </section>
  )
}

export default Cart