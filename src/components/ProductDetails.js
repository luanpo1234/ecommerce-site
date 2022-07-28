import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import QtyToggler from "./QtyToggler";
import products from "../products.json";
import formatPrice from "../utils/formatPrice";
//import image from "../img/luffa_1.jpg";


const ProductDetails = ({ getImage }) => {
    const MIN_QTY = 1;
    const navigate = useNavigate();
    const [qty, setQty] = useState(MIN_QTY);
    const { productLink } = useParams();
    const { addToCart } = useContext(CartContext);
    const productArray = products.products;

    const product = productArray.find(
        prod => prod.link === productLink
        );
    
    const addToCartAndGoToCheckout = (checkout=true) => {
        if (qty > 0) {
            addToCart(product.link, qty);
            checkout && navigate("/checkout");
        }
    }

    const handleFormSubmit = (e, checkout) => {
        //tá diminuindo um inexplicavelmente
        addToCartAndGoToCheckout(checkout=checkout);
        e.preventDefault();
    }

    return (
        <div>
            <div className="custom-title">
                <h2>{product.title_de}</h2>
                <hr />
            </div>
            <div className="product-detail--container">
                <div className="product-detail--info">
                    <img className="product-detail--info--img" src={product.img} alt={product.title} />
                    <h3>{product.description_de.subtitle}</h3>
                    <p>{product.description_de.text}</p>
                </div>
                <div className="product-detail--buy">
                    <div className="product-detail--buy--price"> <h3>{formatPrice(product.price)} €</h3> </div>
                    <form onSubmit={(e) => handleFormSubmit(e, true)}>
                        <div className="product-detail--define-qty">
                            <span>Menge</span>
                                <QtyToggler qty={qty} setQty={setQty} minQty={MIN_QTY} />
                        </div>
                        <p>Lieferbar in 3-5 Tagen</p>
                            <button onClick={() => addToCartAndGoToCheckout(true)}>In den Einkaufswagen legen</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;
//<img className="product-detail-img" src={() => getImage(product.img)} alt={product.title} />