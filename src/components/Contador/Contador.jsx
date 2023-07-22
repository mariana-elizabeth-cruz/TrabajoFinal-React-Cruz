import { useState } from "react";
import './Contador.css'


// eslint-disable-next-line react/prop-types
const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

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
        <section>
            <div className="boxContador">
                <div>
                    <button onClick={disminuirCont} className="btnCont" > - </button>
                    <strong className="btnNum" > {contador} </strong>
                    <button onClick={aumentarCont} className="btnCont" > + </button>
                </div>
                <div>
                    <button id="boton" onClick={() => funcionAgregar(contador)} className="btnCont" > Agregar al carrito </button>
                </div>
            </div>

        </section>
    )
}

export default Contador
