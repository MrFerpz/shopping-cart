import { useState, useEffect } from 'react';
import styles from "./FeaturedProduct.module.css";
import QuantityBar from "./QuantityBar";

function FeaturedProduct({productID}) {
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

    return (
        <div className={styles.featuredCard}>
            <h4 className={styles.featuredCardTitle}><b>{productData.title}</b></h4>
            <img className={styles.heroImage} src={productData.image} alt={productData.title}></img>
            <QuantityBar/>
        </div>
    )
}

export default FeaturedProduct