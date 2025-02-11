import styles from "./HeroBanner.module.css"
import yogPic1 from "./yog1.png";

function HeroBanner() {
    return (
        <section className={styles.heroBannerContainer}>
            <h1>Yoghurt directly to your doorstep</h1>
            <h2>Get your mitts on these yogs while they last</h2>
            <img src={yogPic1} alt="Yoghurt with strawberries" width="300"></img>
        </section>
    )
}

export default HeroBanner