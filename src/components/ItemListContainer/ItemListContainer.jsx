
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getCategoria } from "../../asyncmock"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProducto = idCategoria ? getCategoria : getProductos;

        funcionProducto(idCategoria)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))

    }, [idCategoria])

    return (
        <div className='container'>
            <h2 className="estiloTexto">Mis productos</h2>

            <ul className="estiloLink">
                <li>
                    <NavLink to={"/categoria/1"}> Alcatel </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/2"}> Iphone </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/3"}> Motorola </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/8"}> Nokia </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/4"}> Quantum </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/5"}> Samsung </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/6"}> TLC </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/7"}> ZTE </NavLink>
                </li>
            </ul>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer