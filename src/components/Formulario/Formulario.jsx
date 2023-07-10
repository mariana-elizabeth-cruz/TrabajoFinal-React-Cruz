// Formulario para guardar los datos de los clientes
import { useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");


    const menejadorFormulario = (e) => {
        e.preventDefault();

        // crea un documentos, con el nombre de la colleccion agregada
        addDoc(collection(db, "usuariosMsj"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        })

        setNombre("");
        setApellido("");
        setTelefono("");
    }

    return (
        <form onSubmit={menejadorFormulario} >
            <h1>Formulario de contacto </h1>
            <label htmlFor="nombre"> Nombre </label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label htmlFor="apellido"> Apellido </label>
            <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

            <label htmlFor="telefono"> Telefono </label>
            <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

            <button type="submit" > Enviar datos </button>

        </form>
    )
}

export default Formulario