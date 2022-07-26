import React, { useState } from "react";

const CartContext = React.createContext();

function CartContextProvider({children}) {
    //const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (id, qty) => {
        const newCart = {...cartItems};
        newCart[id] ? newCart[id] += qty: newCart[id] = qty;
        setCartItems(newCart)
    }
    
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    console.log(cartItems)
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }