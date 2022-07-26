import { useContext } from "react";
import { CartContext } from "../CartContext";
import CheckoutCard from "./CheckoutCard";
import products from "../products.json";

const Checkout = () => {
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
            />
        );

    const getCheckoutPrice = () => {
        let price = 0;
        Object.keys(cartItems).map(id =>
            price += productsArray.find(item => item.link === id).price * cartItems[id]
        );
        return price;
    };

    return (
        <div className="checkout-container">
            <h2>Einkaufswagen</h2>
            { getProductData() }
            <div class="checkout-payment">
                <h3>Zwischensumme {getCheckoutPrice()} €</h3>
                <button>Bezahlen</button>
            </div>
        </div>
    )
};

export default Checkout;
//<h3>{Object.keys(cartItems).length}</h3>