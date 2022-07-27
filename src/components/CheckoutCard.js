import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import QtyToggler from "./QtyToggler";
import formatPrice from "../utils/formatPrice";

const CheckoutCard = (props) => {
    const MIN_QTY = 0;
    const [qty, setQty] = useState(props.qty);
    const { removeFromCart, addToCart } = useContext(CartContext);

    return (
            <div className="checkout-card">
                <i
                    className="ri-delete-bin-line checkout-cart--delete"
                    onClick={() => removeFromCart(props.id)}
                    >
                    </i>
                <span className="checkout-cart--title"><h3>{props.title}</h3></span>
                <img className="checkout-card--img" src={props.img} alt={props.title} />
                <p className="checkout-cart--price">{formatPrice(props.price)} €</p>
                <div className="checkout-cart--toggler">
                    <QtyToggler qty={qty} setQty={setQty} minQty={MIN_QTY} />
                    <button 
                        className="checkout-card--update-qty-btn" 
                        onClick={() => addToCart(props.id, qty, false)}
                        >
                        Menge aktualisieren
                        </button>
                </div>
            </div>
    )
};

export default CheckoutCard;