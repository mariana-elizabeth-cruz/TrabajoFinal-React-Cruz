// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.css'


// eslint-disable-next-line react/prop-types
const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='boxProducto'>
      <Card className='boxColor'>
        <Card.Img className='estiloImg' variant="top" src={img} alt={nombre} />
        <Card.Body className='estiloProd'>
          <Card.Title> <strong> Celular {nombre} </strong> </Card.Title>
          <Card.Text>Precio ${precio} </Card.Text>
          <div className='boxDetalle'>
            <Link className='btnDetalle' to={`/item/${id}`} > Ver Detalle </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item

