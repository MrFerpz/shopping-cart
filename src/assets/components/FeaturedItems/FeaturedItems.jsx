import styles from "./FeaturedItems.module.css"
import FeaturedProduct from "./subcomponents/FeaturedProduct";

function FeaturedItems() {
    return (
        <section className = {styles.featuredSection}>
            <h2 className = {styles.title}>Featured Items</h2>
            <div className = {styles.featuredGrid}>
                <div></div>
                <FeaturedProduct className = {styles.featuredCard} productID="1"/>
                <FeaturedProduct className = {styles.featuredCard} productID="2"/>
                <FeaturedProduct className = {styles.featuredCard} productID="3"/>
                <FeaturedProduct className = {styles.featuredCard} productID="4"/>
                <div></div>
            </div>
        </section>
    )
}

export default FeaturedItems