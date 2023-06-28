/* eslint-disable react/prop-types */
import Item from "../Item/Item"
import './ItemList.css'

// tiene la funcion de mapear el componente padre
// eslint-disable-next-line react/prop-types
const ItemList = ({productos}) => {
  return (
    <div className="estiloProductos">
        {productos.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  );
}

export default ItemList