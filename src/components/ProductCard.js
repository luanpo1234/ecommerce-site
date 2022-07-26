import {Link} from "react-router-dom";
import formatPrice from "../utils/formatPrice";

const ProductCard = (props) => {

    return (
        <Link to={`/luffas/${props.link}`} className="product-link">
            <div className="product-card">
                <h3>{props.title}</h3>
                <img className="product-card-img" src={props.img} alt={props.title} />
                <p>{formatPrice(props.price)} €</p>
            </div>
        </Link>
    )
};

export default ProductCard;
//<img className="product-card-img" src={() => props.getImage(props.img)} alt={props.title} />