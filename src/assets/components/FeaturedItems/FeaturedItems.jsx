import styles from "./FeaturedItems.module.css"

function FeaturedItems() {
    return (
        <section className = {styles.featuredSection}>
            <h1>Featured Items</h1>
            <div className = {styles.featuredGrid}>
                <div></div>
                <div className = {styles.featuredCard}></div>
                <div className = {styles.featuredCard}></div>
                <div className = {styles.featuredCard}></div>
                <div className = {styles.featuredCard}></div>
                <div></div>
            </div>
        </section>
    )
}

export default FeaturedItems