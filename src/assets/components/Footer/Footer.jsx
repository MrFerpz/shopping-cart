import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footerContainer}>
                <h3>Contact Us</h3>
                <div><b>Address</b></div>
                <div>1234 Road Street, Office 567, London, UK</div><br></br>
                <div><b>Phone</b></div>
                <div>01234567890</div><br></br>
                <div><b>Email</b></div>
                <div>hello@fyaccessories.com</div>
            </div>
            <div className={styles.footerContainer}>
                <h3>Sitemap</h3>
                <div><Link to="/">Home</Link></div><br></br>
                <div><Link to="shop">Shop</Link></div><br></br>
                <div><Link to="basket">Your Basket</Link></div><br></br>
                <a>FAQs</a>
            </div>
        </section>
    )
}

export default Footer