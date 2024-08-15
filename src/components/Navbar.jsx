import styles from "./modules/Navbar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';


function NavbarBs() {
  return (
    <>
      <Navbar className='navBar sticky-top' bg="dark" data-bs-theme="dark">
        <Container className={ styles.container}>

          <Navbar.Brand>
            <Link to ={"./"} className={ styles.logo} >
            <span className={styles.sss}>S</span>NKRS
            <span className={styles.sss}>S</span>S </Link>
          </Navbar.Brand>

          <Nav className={`me-auto ${ styles.linksContainer}`}>
            <Link to={"/category/classic-dunk"} className={ styles.links}>Classic Dunk</Link> 
            <Link to={"/category/retro"} className={ styles.links}>Retro</Link> 
            <Link to={"category/snkrs"} className={ styles.links}>SNKRS</Link>
          </Nav>
          <Link to={"/catalogo"}> {<CartWidget/>} </Link>

        </Container>
      </Navbar>

    </>
  );
}

export default NavbarBs;

