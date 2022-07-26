//import { useState } from "react";

const QtyToggler = ({ qty, setQty, minQty }) => {
    const addOne = () => {
        setQty(prevQty => prevQty + 1)
    };

    const removeOne = () => {
        qty > minQty && setQty(prevQty => prevQty - 1)
    };

    return (
        <span className="qty-toggler">
            <button onClick={removeOne}>-</button>
            <span> {qty} </span>
            <button onClick={addOne}>+</button>
        </span>
        )
};

export default QtyToggler;