import styles from "./CustomerReviews.module.css"

function CustomerReviews() {
    return (
        <section className={styles.reviewsContainer}>
            <h1>What our customers say</h1>
            <div className={styles.emptySeparator}></div>
            <div className={styles.flexContainer}>
                <div className={styles.customerCard}>"I cannot believe what FY accessories did for my wardrobe. Phenomenal!"<br></br><br></br><i>Carlos, Madrid</i></div>
                <div className={styles.customerCard}>"Cor blimez, I will never shop anywhere else again!"<br></br><br></br><i>Jake, Leicester</i></div>
                <div className={styles.customerCard}>"Wowzers, slap me sideways and call me Andy, this place is the bomb!<br></br><br></br><i>Al, Italy</i></div>
            </div>
        </section>
    )
}

export default CustomerReviews