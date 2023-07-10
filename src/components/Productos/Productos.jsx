import { useState, useEffect } from "react"
// import { getDocs, collection, query, where, updateDoc, doc } from "firebase/firestore"
import { getDocs, collection, query, updateDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"

// prueba de envio de datos
import Formulario from "../Formulario/Formulario"

const Productos = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"))

        // se filtran los productos por categoria
        // const misProductos = query(collection(db, "productos"), where("precio", "<", 1800))

        getDocs(misProductos)
            .then(respuesta => {
                // se crea una array con los datos de los productos
                setProducto(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })

    }, [producto])

    // Funcion para descontar los productos de mi base de datos
    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        const nuevoStock = producto.stock - 1;
        await updateDoc(productoRef, { stock: nuevoStock });
    }

    return (
        <div>
            <Formulario />
            <hr />
            <h2>Productos de la lista</h2>
            <div>
                {
                    producto.map(prod => (
                        <div key={prod.id}>
                            <h2> {prod.nombre} </h2>
                            <p> precio: {prod.precio} </p>
                            <p>stock: {prod.stock} </p>
                            <button onClick={() => descontarStock(prod)} > Comprar </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Productos