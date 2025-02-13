import styles from "./HeroBanner.module.css"
import clothes from "./clothes.png";
import { Link } from "react-router-dom";

function HeroBanner() {
    return (
        <section>
            <div className={styles.verticalContainer}>
                <h1>FY ACCESSORIES</h1>
                <h2>You want it? We got it!</h2>
            </div>
        </section>
    )
}

export default HeroBanner