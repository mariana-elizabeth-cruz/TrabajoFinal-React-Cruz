import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");
    // efecto secundario 
    useEffect( () => {
        /*document.title = `Contador: ${contador}`
        if( contador === 5 ) {
            document.getElementById("boton").style.color = "red";
        }*/
        contador > 5 ? setColor("red") : setColor("black");
    }, [contador])

    // se trabaja con eventos
    const aumentarCont = () => {
        // se valida el contador
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const disminuirCont = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <div>
            <button onClick={disminuirCont}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarCont}> + </button>
            <button id="boton" style={{color: color}}> Agregar al carrito </button>
        </div>
    )
}

export default Contador