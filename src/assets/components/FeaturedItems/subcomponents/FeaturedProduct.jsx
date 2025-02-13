import { useState, useEffect } from 'react';
import styles from "./FeaturedProduct.module.css";
import QuantityBar from "./QuantityBar";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function FeaturedProduct({productID}) {
    // for the child component "QuantityBar"
    const [quantity, setQuantity] = useState(0);
    
    // for the data fetching
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((response) => {
                if (response.status >= 400) {
                    console.log("Error!")
                    throw new Error("Server error.");
                }
                return response.json()
            })
            .then(json => {
                console.log(json);
                setProductData(json);
            })
            .catch((error) => {
                console.log(error);
                setError(error)
            })
            .finally(() => setLoading(false))
            }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>A network error was encountered.</div>

    function changeQuantity(e) {
        let updatedQuantity = parseInt(e.target.value) || 0
        setQuantity(updatedQuantity);
    }

    return (
        <div className={styles.featuredCard}>
            <div className={styles.imageWrapper}>
                <img className={styles.heroImage} src={productData.image} alt={productData.title}></img>
            </div>
            <h4 className={styles.featuredCardTitle}><b>{productData.title}</b></h4>
            <div className={styles.featuredDescription}>{productData.description}</div>
            <QuantityBar id={productID} onChange={changeQuantity}/>
            <div className={styles.priceGrid}>
                <div className={styles.price}>${Math.round(productData.price * 100)/100} each</div>
                <div className={styles.totalPrice}>${Math.round(productData.price * quantity * 100/100)} total</div>
                <button className={styles.goToCart}><Link to="shop"><FaShoppingCart/></Link></button>
            </div>
        </div>
    )
}

export default FeaturedProduct