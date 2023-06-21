
import Item from "../Item/Item"
import './ItemList.css'

// tiene la funcion de mapear el componente padre
const ItemList = ({productos}) => {
  return (
    <div className="estiloProductos">
        {productos.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList