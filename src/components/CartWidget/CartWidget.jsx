import { useContext } from "react";
import { CarritoContext } from '../../context/context'
import { Link } from "react-router-dom";
import "./CartWidget.css"

// error con carritoContext
const CartWidget = () => {
  const carrito = "/imagenes/carrito.png";
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to={"/cart"} >
        <img className="carrito" src={carrito} alt="Imagen de un carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget