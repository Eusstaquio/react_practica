import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartIcon } from './CartWidget';
import { Link } from 'react-router-dom';


function NavbarBs() {
  return (
    <>
      <Navbar className='navBar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <Link to ={"./"}>Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/category/classic-dunk"}>Classic Dunk</Link> 
            <Link to={"/category/retro"}>Retro</Link> 
            <Link to={"category/snkrs"}>SNKRS</Link>
          </Nav>
          <CartIcon/>
        </Container>
      </Navbar>

    </>
  );
}

export default NavbarBs;

