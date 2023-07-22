import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


const NavBar = () => {

  return (
    <>

      <Navbar expand="lg" className="colorNav">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className='estiloNavText' >
            <img className="logoNav" src="/imagenes/logoDos.png" alt="Logo de la tienda" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '180px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"} className='estiloNavText' >Tienda</Nav.Link>
              <Nav.Link as={Link} to={"/contacto"} className='estiloNavText' >Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar
