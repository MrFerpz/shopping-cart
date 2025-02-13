import styles from "./HeroBanner.module.css"
import yogPic1 from "./yog1.png";
import { Link } from "react-router-dom";

function HeroBanner() {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.verticalContainer}>
                <h1>Yoghurt directly to your doorstep...</h1>
                <h2>Get your mitts on these yogs ASAP!</h2>
                <button><Link to="shop">Shop Yog</Link></button>
            </div>
            <img src={yogPic1} alt="Yoghurt with strawberries" className={styles.yoghurtPic}></img>
        </section>
    )
}

export default HeroBanner