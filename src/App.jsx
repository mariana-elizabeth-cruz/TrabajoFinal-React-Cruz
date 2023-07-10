import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Productos from './components/Productos/Productos';
import Home from './components/Home/Home';
import { CarritoProvider } from './context/context';
import Cart from './components/Cart/Cart';



const App = () => {

  return (

    <>

      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<h2> Falta checkout </h2>} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/iniciarSesion" element={<IniciarSesion />} />
            <Route path="/lista" element={<Productos />} />
          </Routes>
        </CarritoProvider>

      </BrowserRouter>

    </>

  )
}

export default App