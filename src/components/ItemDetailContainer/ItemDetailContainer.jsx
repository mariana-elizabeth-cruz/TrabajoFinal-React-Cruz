import { useState, useEffect } from "react"
// import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    // useEffect del asyncmock
    // useEffect(() => {
    //     getUnProducto(idItem)
    //         .then(res => setProducto(res))
    //         .catch(error => console.log(error))
    // }, [idItem])

    // useEffeck para db
    useEffect(() => {
        const nuevoDoc = doc(db, "productos", idItem);

        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoProducto = { id: res.id, ...data};
            setProducto(nuevoProducto);
        })
        .catch(error => console.log(error))
    }, [idItem])


    return (
        <div className="container">
            <ItemDetail { ...producto} />
        </div>
    )
}

export default ItemDetailContainer
