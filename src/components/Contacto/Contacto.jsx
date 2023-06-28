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
        <>
            <div className='estiloContacto'>
                <h1>Contacta me</h1>
            </div>
            <div className='estiloForm'>
                <form onSubmit={enviarMensaje} className='container'>
                    <Form.Group md="mb-3" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control required as="textarea" rows={5} value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                    </Form.Group>
                    <button type="submit"> Enviar Mensaje </button>


                </form>
            </div>

        </>
    )
}

export default Contacto