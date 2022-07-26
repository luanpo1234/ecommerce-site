import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import QtyToggler from "./QtyToggler";
import products from "../products.json";
//import image from "../img/luffa_1.jpg";


const ProductDetails = ({ getImage }) => {
    const MIN_QTY = 1;
    const [qty, setQty] = useState(MIN_QTY);
    const { productLink } = useParams();
    const { addToCart } = useContext(CartContext);
    const productArray = products.products;

    const product = productArray.find(
        prod => prod.link === productLink
        );

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
                    <div className="product-detail--buy--price"> <h3>{product.price} €</h3> </div>
                    <div className="product-detail--define-qty">
                        <span>Menge</span>
                            <QtyToggler qty={qty} setQty={setQty} minQty={MIN_QTY} />
                    </div>
                    <p>Lieferbar in 3-5 Tagen</p>
                    {/* Isso é uma prática aceitável? */}
                    <Link to="/checkout">
                        <button onClick={() => addToCart(product.link, qty)}>In den Einkaufswagen legen</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;
//<img className="product-detail-img" src={() => getImage(product.img)} alt={product.title} />