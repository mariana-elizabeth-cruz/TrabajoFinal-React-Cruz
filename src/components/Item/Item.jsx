// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.css'


// eslint-disable-next-line react/prop-types
const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='boxProducto'>

      <Card style={{ width: '18rem' }}>
        <Card.Img className='estiloImg' variant="top" src={img} alt={nombre} />
        <Card.Body className='estiloProd'>
          <Card.Title> {nombre} </Card.Title>
          <Card.Text>Precio ${precio} </Card.Text>
          <Link to={`/item/${id}`} > Ver Detalle </Link>
        </Card.Body>
      </Card>


    </div>
  )
}

export default Item

