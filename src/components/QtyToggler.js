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
            <input 
                value={qty}
                onChange={(e) => !isNaN(e.target.value) && setQty(Number(e.target.value))}
            />
            <button onClick={addOne}>+</button>
        </span>
        )
};

export default QtyToggler;