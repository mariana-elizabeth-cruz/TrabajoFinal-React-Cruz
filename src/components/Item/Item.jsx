
import './Item.css'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio ${precio}</p>
        <p>Id: {id}</p>
        <button> Ver Detalle </button>
    </div>
  )
}

export default Item