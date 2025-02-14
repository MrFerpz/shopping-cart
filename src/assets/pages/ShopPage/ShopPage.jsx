import { Link } from 'react-router-dom';
import styles from "./ShopPage.module.css"
import FeaturedProduct from '../../components/FeaturedItems/subcomponents/FeaturedProduct';


function ShopPage() {
    const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div>
            <div>
                <div className={styles.shopGrid}>
                    {productList.map((product) => 
                        <FeaturedProduct className={styles.productCard} productID={product}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopPage