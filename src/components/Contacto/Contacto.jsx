// import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Swal from 'sweetalert2';
import emailjs from "emailjs-com"
import './Contacto.css'

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");


    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        emailjs.send(
            "service_hbb6dtb",
            "template_hb2qlgr",
            templateParams,
            "edEpJkHeok-dEXWeV"
        )
            .then((respuesta) => {
                if (respuesta.text) {
                    Swal.fire({
                        title: 'Muchas Gracias!',
                        text: 'Su mensaje se envio exitosamente!',
                        icon: 'success',
                        confirmButtonColor: '#083028'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocurrio un error!'
                    })
                }
            })

        setNombre("");
        setEmail("");
        setMensaje("");
    }


    return (
        <section className='container sectionContacto '>
            <div className='estiloContacto'>
                <h2>Dejanos aquí tu mensaje</h2>
            </div>
            <form onSubmit={enviarMensaje} className='formContacto'>
                <img className="imgContacto" src="/imagenes/enviarMsj.png" alt="Personas enviando mensaje" />
                <div className='estiloFormularioContacto'>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese su nombre" required />
                    </div>

                    <div>
                        <label htmlFor="">Correo Electrónico</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nombre@ejemplo.com" required />
                    </div>

                    <div className="textoContacto">
                        <label htmlFor="">Mensaje</label>
                        <textarea name="" id="" cols="45" rows="10" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                    </div>

                    <button type="submit" className='btnEnviarMsj' > Enviar Mensaje </button>
                </div>
            </form>

        </section>
    )
}

export default Contacto