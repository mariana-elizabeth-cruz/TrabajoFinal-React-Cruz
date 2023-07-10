import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import { useContext } from 'react'
import { CarritoContext } from '../../context/context'
import './ItemDetail.css'

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCant, setAgregarCant] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  // se maneja la cantidad de productos
  const manejarCantidad = (cantidad) => {
    setAgregarCant(cantidad);
    console.log("Productos agregados: " + cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }


  return (
    <div className="container">
      <h2>Nombre {nombre} </h2>
      <img className="detailImg" src={img} alt={nombre} />
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam deleniti ducimus aut rem omnis nihil corporis esse, minus, vitae, praesentium recusandae sunt earum eveniet. Cum repudiandae asperiores blanditiis esse illum.</p>
      {
        agregarCant > 0 ? (<Link to={"/cart"}> Terminar Compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejarCantidad} />)
      }
    </div>
  )
}

export default ItemDetail