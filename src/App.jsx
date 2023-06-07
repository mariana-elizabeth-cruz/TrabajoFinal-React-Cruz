import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'


// se importa primero hooks componenetes y css
const App = () => {

  return (
    
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenido al centro de música"}/>
    </>
    
  )
}

export default App