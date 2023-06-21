import Contador from "../Contador/Contador";
import "./CartWidget.css"

const CartWidget = () => {
    const carrito= "/imagenes/carrito.png" ;
  return (
    <div>
        <img className="carrito" src={carrito} alt="Imagen de un carrito de compras"/>
        {/* <strong> 15 </strong> */}
        <Contador stock={10} inicial={1}/>

    </div>
  )
}

export default CartWidget