import { useState, useEffect } from "react"

const Tienda = () => {
    const [usuarios, setUsuarios] = useState([]);
    // const [busqueda, setBusqueda] = useState("");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(datos => setUsuarios(datos))
            .catch(error => console.log("Vamos a morir", error));

    }, [])

    // const manejadorSubmit = (event) => {
    //     event.preventDefault();
    //     setBusqueda(event.target.busqueda.value);
    //     event.target.busqueda.value;
    // }


    return (
        <div>
            <h2>Usuarios tech</h2>
            <ul>
                {
                    usuarios.map(usuario => {
                        return (
                            <li key={usuario.id}>
                                {usuario.name} - {usuario.email}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Tienda