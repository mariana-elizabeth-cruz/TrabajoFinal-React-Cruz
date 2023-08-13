import { Link } from "react-router-dom"
import "./Error404.css"

const Error404 = () => {
  return (
    <section className="sectionError">
      <div className="boxError">
        <div className="boxErrorTexto">
          <h2>Error 404</h2>
          <h3>Lo siento...</h3>
          <h3>No encontramos la página que estás buscando.</h3>
        </div>
        <div className="boxVolverMenu">
          <img className="imgError" src="/imagenes/error.png" alt="Imagen de celular en reparación." />
          <Link to={"/"} className="btnVolverInicio" >Volver al inicio</Link>
        </div>
      </div>
    </section>
  )
}

export default Error404