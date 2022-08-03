
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cart/CartWidget';
import { NavLink } from 'react-router-dom';

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand NavLink to='/' >Tailored</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/' >Inicio</NavLink>
            {/* 
            <NavLink to='/categoria'>Formal</NavLink>
            <NavLink to='/categoria'>Casual</NavLink> 

               No sabia como diferenciar las dos categorias asi que intente hacer un dropdown
               
               */}
            <NavDropdown title={<button className='btnProductos'><span>Indumentaria</span></button>} id="basic-nav-dropdown">
                  <div className='subMenu'>
                    <NavLink className='linkSubMenu' to='/Indumentaria/Formal'>Formal</NavLink>
                    <NavLink className='linkSubMenu' to='/Indumentaria/Casual'>Casual</NavLink>
                  </div>
                </NavDropdown>
            <NavLink to='/Cart'><CartWidget/></NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}



