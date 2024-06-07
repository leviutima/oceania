'use client'
import React, { createContext, useContext, useState, useCallback } from 'react';
import { Produto } from '../../../Services/ProdutoService';

interface CartItem {
    produto: Produto;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (produto: Produto) => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = useCallback((produto: Produto) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.produto.id === produto.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { produto, quantity: 1 }];
            }
        });
    }, []);

    const total = cart.reduce((acc, item) => acc + item.produto.preco * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
