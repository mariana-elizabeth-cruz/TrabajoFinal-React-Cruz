
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    // useEffect que se conecta con la base de datos
    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))

    }, [idCategoria])

    return (
        <section className='container'>
            <h2 className="estiloTexto">Tienda Mobile</h2>
            <div className="boxGrid">
                <div>
                    <ul className="estiloLista">
                        <li>
                            <NavLink to={"/categoria/1"} className="estiloLink" > Alcatel </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/2"} className="estiloLink" > Iphone </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/3"} className="estiloLink" > Samsung </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/4"} className="estiloLink" > Motorola </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/5"} className="estiloLink" > Quantum </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/6"} className="estiloLink" > TLC </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/7"} className="estiloLink" > ZTE </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/8"} className="estiloLink" > Nokia </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/categoria/9"} className="estiloLink" > OPPO </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <ItemList productos={productos} />
                </div>
            </div>


        </section>
    )
}

export default ItemListContainer