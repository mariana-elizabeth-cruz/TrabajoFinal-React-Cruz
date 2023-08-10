/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CarritoContext } from '../../context/Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CartItem.css'


// eslint-disable-next-line react/prop-types
const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <section className="sectionDetalle" key={item.id}>
        <Card className="boxDetalleCompra">
          <Card.Body >
            <Card.Title className="boxDetalleProducto" > {item.nombre} </Card.Title>
            <Card.Text> Cantidad: {cantidad} </Card.Text>
            <Card.Text> Precio $ {item.precio} </Card.Text>
            <Button onClick={() => eliminarProducto(item.id)} > Eliminar </Button>
          </Card.Body>
        </Card>

    </section>
  )
}

export default CartItem

