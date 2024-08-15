import { useContext } from "react";
import styles from "./modules/CartWidget.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../Context/Cartcontext";


function CartWidget() {

  const {carrito, numeroCarrito} = useContext(CartContext)

  if(carrito == 0){
    return(
      <>
      <p className={styles.shoppingCart}>Shopping Cart <FaCartArrowDown/></p>
    </>
    )
  }

  return (
      <>
        <p className={styles.shoppingCart}>Shopping Cart <FaCartArrowDown/>
          <span className={styles.itemCountSmall}>{numeroCarrito()}</span>
        </p>
      </>
  );
}

export { CartWidget }