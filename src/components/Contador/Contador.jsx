import { useContador } from "../../UseContador"
import './Contador.css'


// eslint-disable-next-line react/prop-types
const Contador = ({funcionAgregar}) => {
    const {contador, aumentarCont, disminuirCont} = useContador(1, 10)
    
    
    return (
        <div>
            <button onClick={disminuirCont}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarCont}> + </button>
            <button id="boton" onClick={() => funcionAgregar(contador)} > Agregar al carrito </button>
        </div>
    )
}

export default Contador
