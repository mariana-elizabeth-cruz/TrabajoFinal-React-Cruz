import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {

  return (

    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/iniciarSesion" element={<IniciarSesion/>} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App