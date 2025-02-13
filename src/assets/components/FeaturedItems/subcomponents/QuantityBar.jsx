import { useState } from "react";

function QuantityBar() {
    const [wasClicked, setWasClicked] = useState(false);
    const [quantity, setQuantity] = useState(0);

    function handleClick(e) {
        setWasClicked(true)
    }

    function subtractQuantity() {
        let updatedQuantity = quantity - 1;
        setQuantity(updatedQuantity);
    }

    function addQuantity() {
        let updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);
    }

    function inputQuantity(e) {
        let updatedQuantity = e.target.value;
        setQuantity(updatedQuantity);
    }

   return (
    <div>
        {wasClicked ? (
                <div>
                    <div>
                        <button onClick={subtractQuantity}>-</button>
                        <input onChange={inputQuantity}></input>
                        <button onClick={addQuantity}>+</button>
                    </div>
                    <div>{quantity}</div>
                </div>
        ) : (
            <button onClick={handleClick}>Add to cart</button>
        )
        }
    </div>
   )
}

export default QuantityBar