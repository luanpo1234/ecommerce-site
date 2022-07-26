const formatPrice = (price) => {
    price = Number.parseFloat(price).toFixed(2);
    return price.replaceAll(".", ",");
}

export default formatPrice;