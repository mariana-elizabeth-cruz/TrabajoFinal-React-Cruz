
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asyncmock"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        getProductos()
        .then(respuesta => setProductos(respuesta))
    }, [])
    console.log(productos);
    return (
        <div>
            <h2>Mis productos</h2>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer