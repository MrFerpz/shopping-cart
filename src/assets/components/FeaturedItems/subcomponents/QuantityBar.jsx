import { useState } from "react";
import styles from "./QuantityBar.module.css"

function QuantityBar( {onChange} ) {
    const [wasClicked, setWasClicked] = useState(false);

    function handleClick(e) {
        setWasClicked(true)
    }

   return (
    <div>
        {wasClicked ? (
                <div>
                    <div>
                        <input type="number" min="0" defaultValue="0" onChange={onChange}></input>
                    </div>
                </div>
        ) : (
            <button className={styles.addToCartButton} onClick={handleClick}>Add to cart</button>
        )
        }
    </div>
   )
}

export default QuantityBar