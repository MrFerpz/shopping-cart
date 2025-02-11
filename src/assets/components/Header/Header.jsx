import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import classNames from 'classnames';

function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/" className={styles.navItem} id="home-link">HOME</Link></li>
                    <li><Link to="shop" className={classNames(styles.navItem, styles.shopLink)}>SHOP</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header