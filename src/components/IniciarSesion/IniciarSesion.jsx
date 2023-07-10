import { useState } from "react"


const IniciarSesion = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [verificado, setVerificado] = useState(false);

  const habilitarUsuario = (e) => {
    e.preventDefault(); 
    if (usuario === "mariana" && password === "cruz") {
      setVerificado(true);
      setUsuario("");
      setPassword("");
    } else {
      setUsuario("Usuario incorrecto");
      setPassword("INGRESE DE NUEVO");
    }

  }

  const deshabilitarUsuario = () => {
    setVerificado(false);
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      { verificado ? (<button onClick={deshabilitarUsuario} > Cerrar Sesión </button>) : (
        <form onSubmit={habilitarUsuario} >
          <label htmlFor="usuario"> Usuario </label>
          <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

          <label htmlFor="password"> Contraseña </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button> Iniciar Sesión </button>
        </form>
      ) }

    </div>
  )
}

export default IniciarSesion