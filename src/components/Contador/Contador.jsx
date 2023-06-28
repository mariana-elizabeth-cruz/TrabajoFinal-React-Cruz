import { useContador } from "../../UseContador"
import './Contador.css'


const Contador = () => {
    const {contador, aumentarCont, disminuirCont} = useContador(1, 10)
    
    
    return (
        <div>
            <button onClick={disminuirCont}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarCont}> + </button>
            <button id="boton"> Agregar al carrito </button>
        </div>
    )
}

export default Contador
