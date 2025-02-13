import styles from "./HeroBanner.module.css"
import clothes from "./clothes.png";
import { Link } from "react-router-dom";

function HeroBanner() {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.verticalContainer}>
                <h1>FY Clothes & Accessories</h1>
                <h2>You want it? We got it!</h2>
                <button><Link to="shop">SHOP</Link></button>
            </div>
            <img src={clothes} alt="Autumn Clothes" className={styles.clothesPic}></img>
        </section>
    )
}

export default HeroBanner