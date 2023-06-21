import { useState, useEffect } from "react"

const Tienda = () => {
    const [productos, setProductos] = useState("");

    useEffect(() => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
            .then(respuesta => respuesta.json)
            .then(datos => setProductos(datos))
            .catch(error => console.log("Vamos a morir", error));

    }, [])


    return (
        <div>
            <h1> Personajes: </h1>
            {
                // MAP NO FUNCIONA
                productos.map((per, index) => {
                    return (
                        <div key={index}>
                            <p>Nombre: {per.character}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tienda