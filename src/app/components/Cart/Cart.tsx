'use client'
import { useState } from 'react';
import styles from './Cart.module.css';
import { FaCartShopping } from "react-icons/fa6";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <button className={styles.cartButton} onClick={toggleCart}>
        <FaCartShopping />
      </button>
      <aside className={`${styles.cartAside} ${isCartOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleCart}>×</button>
        <div className={styles.cartContent}>
          <h2>Seu Carrinho</h2>
          
        </div>
      </aside>
    </div>
  );
}
