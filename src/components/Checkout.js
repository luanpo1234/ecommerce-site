import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import CheckoutCard from "./CheckoutCard";
import products from "../products.json";
import formatPrice from "../utils/formatPrice";

const Checkout = () => {
    const [checkoutPrice, setCheckoutPrice] = useState(0);
    const { cartItems } = useContext(CartContext);
    const productsArray = products.products;

    console.log("Keys", Object.keys(cartItems));
    const getProductData = () => 
        Object.keys(cartItems).map(id =>
            <CheckoutCard 
                title={productsArray.find(item => item.link === id).title_de}
                img={productsArray.find(item => item.link === id).img}
                price={productsArray.find(item => item.link === id).price}
                qty={cartItems[id]}
                id={id}
            />
        );

    const getCheckoutPrice = () => {
        let price= 0;
        Object.keys(cartItems).map(id =>
            price += productsArray.find(item => item.link === id).price * cartItems[id]
        );
        return price;
    };

    const handlePayment = () => {
        checkoutPrice !== 0 && alert(`${formatPrice(checkoutPrice)} € bezahlt!`);
    }

    useEffect(() => {
        setCheckoutPrice(getCheckoutPrice);
    }, [cartItems]);

    return (
        <div className="checkout-container">
            <h2>Einkaufswagen</h2>
            { getProductData() }
            <div class="checkout-payment">
                <h3>Zwischensumme {formatPrice(checkoutPrice)} €</h3>
                <button onClick={handlePayment}>Bezahlen</button>
            </div>
        </div>
    )
};

export default Checkout;
//<h3>{Object.keys(cartItems).length}</h3>