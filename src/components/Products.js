import ProductCard from "./ProductCard";
import products from "../products.json";

const Products = (props) => {

    const productArray = products.products;

    return (
        <div>
            <div className="custom-title">
                <h2>{props.productsTitle}</h2>
                <hr />
            </div>
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

export default Products;