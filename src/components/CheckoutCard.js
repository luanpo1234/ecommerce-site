
const CheckoutCard = (props) => {
    //const {getImage} = useContext(Context);

    return (
            <div className="checkout-card">
                <span className="checkout-title"><h3>{props.title}</h3></span>
                <img className="checkout-card-img" src={props.img} alt={props.title} />
                <p>{props.price} €</p>
                <p>Stückzahl {props.qty}</p>
            </div>
    )
};

export default CheckoutCard;