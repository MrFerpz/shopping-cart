import styles from "./HeroBanner.module.css"
import clothes from "./clothes.png";
import { Link } from "react-router-dom";

function HeroBanner() {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.verticalContainer}>
                <h1>FY Clothes & Accessories</h1>
                <h2>Get your mitts on these ASAP!</h2>
                <button><Link to="shop">Store</Link></button>
            </div>
            <img src={clothes} alt="Autumn Clothes" className={styles.clothesPic}></img>
        </section>
    )
}

export default HeroBanner