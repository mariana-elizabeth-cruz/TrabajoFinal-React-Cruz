import { useState, useEffect } from "react"
import { getDocs, collection, query, updateDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"

const Productos = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"))

        // const misProductos = query(collection(db, "productos"), where("precio", "<", 1000))

        getDocs(misProductos)
            .then(respuesta => {
                setProducto(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })

    }, [])

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock: nuevoStock});
    }

    return (
        <div>
            <h2>Productos de la lista</h2>
            <div>
                {
                    producto.map(prod => (
                        <div key={prod.id}>
                            <h2> {prod.nombre} </h2>
                            <p> precio: {prod.precio} </p>
                            <p>stock: {prod.stock} </p>
                            <button onClick={() => descontarStock(producto)} > Comprar </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Productos