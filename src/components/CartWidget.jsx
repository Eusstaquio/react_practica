import styles from "./CartWidget.module.css";
import { FaCartArrowDown } from "react-icons/fa";

function CartIcon() {
    return (
        <>
          <p className={styles.shoppingCart}>Shopping Cart <FaCartArrowDown/>
                <span className={styles.itemCountSmall}>6</span>
          </p>
        </>
    );
}

export { CartIcon }