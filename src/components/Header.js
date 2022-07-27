import { Link } from "react-router-dom";
import { useContext } from "react";
//import { LanguageContext } from "../LanguageContext";
import { CartContext } from "../CartContext";
import brazilFlag from "../img/brazil_flag.png";
import germanyFlag from "../img/germany_flag.png";

const Header = () => {
    //const { language, setLanguage } = useContext(LanguageContext);
    const { cartItems } = useContext(CartContext);
    //console.log(language);

    const cartIcon = () => {
        return Object.keys(cartItems).length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
    }

    return (
        <header>
            <div className="country-flags">
              {/*  <img src={germanyFlag} className="flag-icon" alt="Flag of Germany" />
                <img src={brazilFlag} className="flag-icon" alt="Flag of Brazil" onClick={(() => setLanguage("pt"))} />
                */}
            </div>
            <nav>
                <ul>
                    <li><Link to={"/luffas"}>Produkte</Link></li>
                    {/*<li>Seifen</li>
                    <li> <Link to="/home-articles">Handtücher</Link> </li>*/}
                </ul>
            </nav>
            <h1>Yandê</h1>
            <Link to="/checkout"><i className={`shopping-cart ${cartIcon()} ri-fw ri-2x`}></i></Link>
        </header>
    )
};

export default Header;