import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import { useContext } from 'react'
import { CarritoContext } from '../../context/context'
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCant, setAgregarCant] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  // se maneja la cantidad de productos
  const manejarCantidad = (cantidad) => {
    setAgregarCant(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }


  return (
    <section className="container">
      <h2 className='textTitulo'>Detalle del Producto</h2>
      <div className='boxCard'>
        <Card className='boxDetail'>
          <Card.Img className="detailImg" variant="top" src={img} alt={nombre} />
          <Card.Body>
            <Card.Title className='textProducto' > <strong>
              {nombre} </strong>  </Card.Title>
            <Card.Text className='textProducto'> Precio $ {precio} </Card.Text>
            <Card.Text className='textProducto'> Id: {id} </Card.Text>
            <Card.Text className='textProducto'> Detalle </Card.Text>
            {/* en terminar compra se rompe  */}
            {
              agregarCant > 0 ? (<Link to={"/cart"} className='btnCompra' > Terminar Compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejarCantidad} />)
            }
          </Card.Body>
        </Card>
      </div>


    </section>
  )
}

export default ItemDetail