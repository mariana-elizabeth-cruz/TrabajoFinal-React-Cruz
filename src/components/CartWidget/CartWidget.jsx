import { useContext } from "react";
import { CarritoContext } from '../../context/context';
import { Link } from "react-router-dom";
import "./CartWidget.css"


const CartWidget = () => {
  const carrito = "/imagenes/carrito.png";
  const { cantidadTotal } = useContext(CarritoContext);



  return (
    <section>
      <Link to={"/cart"} className="estiloCarrito" >
        <img className="carrito" src={carrito} alt="Imagen de un carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </section>
  )
}

export default CartWidget