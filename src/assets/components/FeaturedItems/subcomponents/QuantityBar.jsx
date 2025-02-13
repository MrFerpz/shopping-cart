import { useState } from "react";

function QuantityBar() {
    const [wasClicked, setWasClicked] = useState(false);
    const [quantity, setQuantity] = useState(0);

    function handleClick(e) {
        setWasClicked(true)
    }

    function changeQuantity(e) {
        let updatedQuantity = e.target.value;
        setQuantity(updatedQuantity);
    }

   return (
    <div>
        {wasClicked ? (
                <div>
                    <div>
                        <input type="number" onChange={changeQuantity}></input>
                    </div>
                </div>
        ) : (
            <button onClick={handleClick}>Add to cart</button>
        )
        }
    </div>
   )
}

export default QuantityBar