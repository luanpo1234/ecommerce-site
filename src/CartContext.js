import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || {});

    const addToCart = (id, qty, add=true) => {
        // Melhora isso depois:
        if (qty < 0) {
            throw Error;
        }
        const newCart = {...cartItems};
        // if add===false, replace value, else add
        if (add) {
            newCart[id] ? newCart[id] += qty: newCart[id] = qty;
            setCartItems(newCart);
        } else if (!add) {
            if (qty === 0) {
                removeFromCart(id)
            } else if (qty > 0) {
                newCart[id] = qty;
                setCartItems(newCart);
            }   
        }
    }
    
    const removeFromCart = (id) => {
        // Workaround to exclude items from cartItems by key.
        // If there is only one item in cart, set cartItems to empty object, else apply logic.
        if (Object.keys(cartItems).length === 1) {
            setCartItems({});
        } else if (Object.keys(cartItems).length > 1) {
            const allowed = Object.keys(cartItems).filter(item => item !== id);
            console.log(allowed);
            setCartItems(prevItems => Object.fromEntries([allowed].map(key => [key, prevItems[key]])))
        }
    }

    const emptyCart = () => {
        setCartItems({});
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    console.log("Cart:", cartItems)
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }