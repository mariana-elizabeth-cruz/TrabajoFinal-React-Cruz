import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"



const NavBar = () => {

  return (
    <> 
    <Navbar className='colorNav'>
        <Container>

          <Navbar.Brand as={Link} to={"/"} className='estiloNavText' >TiendaTech</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/categoria/1"} className='estiloNavText' >Alcatel</Nav.Link>
            <Nav.Link as={Link} to={"/categoria/2"} className='estiloNavText' >Iphone</Nav.Link>
            <Nav.Link as={Link} to={"/categoria/3"} className='estiloNavText' >Samsung</Nav.Link>
            <Nav.Link as={Link} to={"/categoria/4"} className='estiloNavText' >Motorola</Nav.Link>
            <Nav.Link as={Link} to={"/categoria/5"} className='estiloNavText' >Quantum</Nav.Link>
            <Nav.Link as={Link} to={"/categoria/6"} className='estiloNavText' >TCL</Nav.Link>
            <Nav.Link as={Link} to={"/contacto"} className='estiloNavText' >Contacto</Nav.Link>
            <Nav.Link as={Link} to={"/iniciarSesion"} className='estiloNavText' >Iniciar Sesión</Nav.Link>
          </Nav>

          <CartWidget/>

        </Container>
      </Navbar>

    </>
  );
}

export default NavBar
