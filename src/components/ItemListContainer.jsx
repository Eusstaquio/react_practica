import styles from "./ItemListContainer.module.css";

function ItemListContainer({greeting}){
    return(
        <h2 className={styles.listContainer}>
            {greeting}
        </h2>
    )
}

export { ItemListContainer }