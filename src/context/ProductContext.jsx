import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // Cart

    function getProducts() {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching products:", err));
    }

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exists = prevCart.find((p) => p.id === product.id);
            if (exists) {

                return prevCart.map((p) =>
                    p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                );
            } else {
                return [...prevCart, { ...product, qty: 1 }];
            }
        });
    };

    const increaseQty = (id) => {
        setCart((prevCart) =>
            prevCart.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
        );
    };

    const decreaseQty = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
                .filter((p) => p.qty > 0)
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((p) => p.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                getProducts,
                cart,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;
