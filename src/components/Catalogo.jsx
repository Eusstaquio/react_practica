import { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";
import { useParams } from "react-router-dom";
import styles from "./modules/Catalogo.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function Catalogo() {
    const { Catalogo } = useParams()
    const { carrito, vaciarCarrito, eliminarProducto } = useContext(CartContext)
    const navigate = useNavigate()

    function navigateHome (){
        navigate('/')
    }
    
    function precioTotal(){
        let total = 0
        carrito.forEach(element => {
            total += element.precio
        });

        return total
    }


    if(carrito == null || carrito == undefined || carrito == 0){
        return(
            <>
                <h2 className={ styles.title} >El carrito esta vacio</h2>
                <Row>
                    <Col>
                    <Button className={styles.boton} onClick={navigateHome} >Volver a Inicio</Button>
                    </Col>
                </Row>
            </>
        )
    }

    return(
        <>
            <h2 className={ styles.title} >Productos en el Carrito:</h2>

            <Container>

                <Row>
                    <Col>
                        {carrito.map(producto =>
                        <Row key={producto.id} className={styles.productoCarrito}>
                            <Col xs="auto" className={ styles.cols}>
                                <img className={ styles.img} src={producto.imagen} alt={producto.nombre}/>
                            </Col>
                            <Col className={`flex-grow-1 ${styles.columna}`}>
                                <h3 className={styles.h3}>{producto.nombre}</h3>
                                <h4 className={styles.texto}>Color: {producto.color}</h4>
                                <h4 className={styles.texto}>${producto.precio}</h4>
                                <Button className={styles.deleteButton} onClick={() => eliminarProducto(producto.id)} >X</Button>
                            </Col>
                        </Row>)}
                    </Col>

                    <Col md={4}>
                        <p>Total a pagar:</p>
                        {precioTotal()}
                    </Col>
                </Row>
                <Row>
                    <Col className={ styles.botonContainer} >
                    <Button className={styles.boton} onClick={() => vaciarCarrito()} >Vaciar Carrito</Button>
                    </Col>
                </Row>

            </Container>
            
        
        </>
    )
}