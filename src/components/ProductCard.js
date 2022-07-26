import {Link} from "react-router-dom";
//import {useContext} from "react";
//import {Context} from "../Context";
//import image from "../img/luffa_1.jpg";

const ProductCard = (props) => {
    //const {getImage} = useContext(Context);

    // tá bagunçado esse esquema de pegar pelo link, tem que mudar a lógica toda!
    return (
        <Link to={`/luffas/${props.link}`} className="product-link">
            <div className="product-card">
                <h3>{props.title}</h3>
                <img className="product-card-img" src={props.img} alt={props.title} />
                <p>{props.price} €</p>
            </div>
        </Link>
    )
};

export default ProductCard;
//<img className="product-card-img" src={() => props.getImage(props.img)} alt={props.title} />