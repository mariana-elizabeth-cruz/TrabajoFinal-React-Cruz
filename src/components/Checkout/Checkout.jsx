import { useState, useContext } from "react"
import { CarritoContext } from '../../context/Context'
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { Link } from 'react-router-dom'
import './Checkout.css'


const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");


  // funciones y manejadores
  const manejadorFormulario = (e) => {
    e.preventDefault();

    // CONTROLAR LOS CAMPOS
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Debe completar todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos de email son incorrectos");
      return;
    }

    // aqui se efectua la orden de compra
    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
      })),
      total: cantidadTotal,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date()
    };
    

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const producRef = doc(db, "productos", productoOrden.id);
        const producDoc = await getDoc(producRef);
        const stockActual = producDoc.data().stock;
        // se actualiza el stock
        await updateDoc(producRef, {
          stock: stockActual - productoOrden.cantidad
        });
      })
    )
      .then(() => {
        // Se guarda la orden en la base de datos
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Se produjo un error", error);
            setError("Se produjo un error al generar la orden de compra");
          })
      })
      .catch((error) => {
        console.log("Error al actualizar stock", error);
        setError("Se produjo un error al actualziar stock.");
      })
  }


  return (
    <section className="checkoutSection">
      {/* <h2 >Bienvenido al cheackout de tu compra</h2> */}
      <form onSubmit={manejadorFormulario} className="boxForm">
        <div className="checkoutBoxProductos">
          <h3>Detalle del pedido</h3>
          {carrito.map(producto => (
            <div key={producto.id} className="mostrarProducto">
              <p>
                {producto.item.nombre}
              </p>
              <p>
                Cantidad: {producto.cantidad}
              </p>
              <p>
                Precio $ {producto.item.precio}
              </p>
            </div>
          ))}
        </div>
        <div className="boxFormularioCompra">
          <div>
            <h3>¡Empecemos!</h3>
            <h3>Ingresá tus datos para avanzar con la compra</h3>
          </div>
          <p>Datos obligatorios <strong style={{ color: "red" }} >*</strong> </p>
          <div>
            <label htmlFor="nombre">Nombre <strong style={{ color: "red" }} >*</strong> </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            <label htmlFor="apellido">Apellido <strong style={{ color: "red" }} >*</strong> </label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </div>
          <div>
            <label htmlFor="telefono">Telefono <strong style={{ color: "red" }} >*</strong> </label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email <strong style={{ color: "red" }} >*</strong> </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Email confirmacion <strong style={{ color: "red" }} >*</strong> </label>
            <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
          </div>
          {
            error && <p style={{ color: "red" }} > {error} </p>
          }
          <button type="submit" className="btnFinalizarCompra" >Finalizar esta compra</button>
        </div>
      </form>
      <div className="compraExitosa">
        {
          ordenId && (
            <strong> ¡Gracias por su compra. Su numero de orden es: {ordenId}.! </strong>
          )
        }
      </div>
      <div className="btnSeguir">
        <Link to={"/"} className="btnSeguirComprando"> Seguir comprando </Link>
      </div>
    </section>
  )
}

export default Checkout