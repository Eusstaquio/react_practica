import styles from "./ItemDetailContainer.module.css";
import arrayProductos from "../productos.json";
import { useParams } from "react-router-dom";


function ItemDetailContainer(){
    const { itemId } = useParams()
    const item = arrayProductos.find(item => item.id == itemId)
    console.log(item)

    return (
        <div className={styles.itemDetailContainer}>
            <div className="col">
                <img className="img" src={item.imagen} />
            </div>
            <div className="col">
                <h1>{item.nombre}</h1>
                <h3>coleccion: {item.categoria}</h3>
                <h4>${item.precio}</h4>
            </div>
        </div>
    );
}

export { ItemDetailContainer }