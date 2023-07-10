
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

            <ul className="estiloLista">
                <li>
                    <NavLink to={"/categoria/1"} className="estiloLink" > Alcatel </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/2"} className="estiloLink" > Iphone </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/3"} className="estiloLink" > Motorola </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/8"} className="estiloLink" > Nokia </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/4"} className="estiloLink" > Quantum </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/5"} className="estiloLink" > Samsung </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/6"} className="estiloLink" > TLC </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/7"} className="estiloLink" > ZTE </NavLink>
                </li>
            </ul>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer