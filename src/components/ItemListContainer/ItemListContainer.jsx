
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {
        const funcionProducto = idCategoria ? getCategoria : getProductos;

        funcionProducto(idCategoria)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
            
    }, [idCategoria])
    
    return (
        <div className='container'>
            <h2 className="estiloTexto">Mis productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer