import styles from "./BasketPage.module.css"

function BasketPage() {
    return (
        <div className={styles.sorryMessageContainer}>   
            <div className={styles.sorryMessage}>Sorry, we are not yet ready to take your order. <br></br> Please come back again soon!</div>
        </div>
    )
}

export default BasketPage