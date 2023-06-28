import { useState } from "react";

export const useContador = (inicial, stock) => {
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

    return {contador, aumentarCont, disminuirCont}

}
