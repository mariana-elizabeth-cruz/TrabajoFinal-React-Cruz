import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


const NavBar = () => {
  return (
    <> 
    <Navbar className='colorNav'>
        <Container>
          <Navbar.Brand href="#home">Música</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Biografias</Nav.Link>
            <Nav.Link href="#pricing">Tienda</Nav.Link>
            <Nav.Link href='#'>Iniciar Sesión</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar