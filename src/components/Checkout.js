import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import CheckoutCard from "./CheckoutCard";
import products from "../products.json";
import formatPrice from "../utils/formatPrice";

const Checkout = () => {
    const [checkoutPrice, setCheckoutPrice] = useState(0);
    const { cartItems } = useContext(CartContext);
    const productsArray = products.products;

    const getProductData = () => 
        Object.keys(cartItems).map(id =>
            <CheckoutCard 
                title={productsArray.find(item => item.link === id).title_de}
                img={productsArray.find(item => item.link === id).img}
                price={productsArray.find(item => item.link === id).price}
                qty={cartItems[id]}
                id={id}
                key={id}
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
        if (checkoutPrice !== 0) {
            const res = `${formatPrice(checkoutPrice)} € bezahlt!`;
            console.log(res);
            console.log(cartItems);
            alert(res);
            }
    }

    useEffect(() => {
        setCheckoutPrice(getCheckoutPrice);
    }, [cartItems]);

    return (
        <div className="checkout-container">
            <h2>Einkaufswagen</h2>
            { getProductData() }
            <div className="checkout-payment">
                <h3>Zwischensumme {formatPrice(checkoutPrice)} €</h3>
                <button onClick={handlePayment}>Bezahlen</button>
            </div>
        </div>
    )
};

export default Checkout;
//<h3>{Object.keys(cartItems).length}</h3>