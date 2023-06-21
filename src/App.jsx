// import Tienda from './components/Tienda/Tienda';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'


// se importa primero hooks componenetes y css
const App = () => {

  return (
    
    <>
      <NavBar/>
      <ItemListContainer />
      {/* <Tienda/> */}
    </>
    
  )
}

export default App