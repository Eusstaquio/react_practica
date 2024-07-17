import styles from "./ItemListContainer.module.css";
import arrayProductos from "../productos.json";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";


function ItemListContainer({}){
    const [items, setItems] = useState(arrayProductos)
    const {id} = useParams();

    useEffect(()=>{
        setItems(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos)
    }, [id])

    return (
        <div className="container">
            <div className={styles.listContainer}>
                {items.map(item =>(
                    <div key={item.id} className="col">
                        <Card className={ styles.card }>
                        <Card.Img variant="top" src={item.imagen} alt={item.nombre}/>
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>{item.color}</Card.Text>
                            <Card.Text>${item.precio}</Card.Text>
                            <Button variant="primary" className={ styles.button }>Comprar</Button>
                        </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { ItemListContainer }