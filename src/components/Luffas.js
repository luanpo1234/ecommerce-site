import ProductCard from "./ProductCard";
import products from "../products.json";

const Luffas = (props) => {

    const productArray = products.products;

    return (
        <div>
            <h2>Luffaschwämme</h2>
            <div className="card-container">
            { productArray.map(product =>
                <ProductCard 
                        getImage={props.getImage}
                        img={product.img}
                        key={product.id}
                        title={product.title_de}
                        price={product.price}
                        link={product.link}
                    />
                )}
            </div>
        </div>
    )
};

export default Luffas;