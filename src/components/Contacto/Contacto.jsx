import Form from 'react-bootstrap/Form';
import { useState } from "react"
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
                console.log(respuesta.text);
                alert("Mensaje enviado");
            })
            .catch((error) => {
                console.log(error);
                alert("Error de mensaje");
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
            <div className='estiloFormularioContacto'>
                <form onSubmit={enviarMensaje} className='formTexto'>
                    <Form.Group md="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nombre@ejemplo.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mensaje">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control required as="textarea" rows={5} value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                    </Form.Group>
                    <button type="submit" className='btnEnviarMsj' > Enviar Mensaje </button>
                </form>
            </div>
        </section>
    )
}

export default Contacto