import Contador from "../Contador/Contador";
import "./CartWidget.css"

const CartWidget = () => {
    const carrito= "/imagenes/carrito.png" ;
  return (
    <div>
        <img className="carrito" src={carrito} alt="Imagen de un carrito de compras"/>
        <Contador/>

    </div>
  )
}

export default CartWidget