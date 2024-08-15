import styles from "./modules/ItemListContainer.module.css";
import arrayProductos from "../productos.json";
import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Cartcontext";
import { Toast, ToastContainer, Button } from 'react-bootstrap';


function ItemListContainer({}){
    const [items, setItems] = useState(arrayProductos)
    const {categoryId} = useParams();
    const {showToast, setShowToast} = useContext(CartContext)


    const { agregarProductos} = useContext(CartContext)


    useEffect(()=>{
        setItems(categoryId ? arrayProductos.filter(item => item.categoria == categoryId) : arrayProductos)
    }, [categoryId])

    return (
        <div className="container">
            <div className={styles.listContainer}>
                {items.map(item =>(
                    <div key={item.id} className="col">
                        <Card className={ styles.card }>
                            <Link to={`/item/${item.id}`}>
                                <Card.Img variant="top" src={item.imagen} alt={item.nombre}/>
                            </Link>
                            <Card.Body>
                                <Link to={`/item/${item.id}`}>
                                    <Card.Title>{item.nombre}</Card.Title>
                                </Link>
                                <Card.Text>{item.color}</Card.Text>
                                <Card.Text>${item.precio}</Card.Text>
                                
                                <Button variant="primary" className={ styles.button } onClick={() => agregarProductos(item.id)}>
                                    Add to Cart 
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                <ToastContainer position="bottom-middle" className={styles.toastContainer}>
                    <Toast 
                        onClose={() => setShowToast(false)} 
                        show={showToast} 
                        delay={5000} 
                        autohide
                        bg="black">
                        <Toast.Header>
                            <strong className="me-auto">Notificación</strong>
                            <small>Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body className="text-white">Este producto ya está en tu carrito.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </div>
    )
}

export { ItemListContainer }