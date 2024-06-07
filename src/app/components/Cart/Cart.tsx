'use client';
import { useState } from 'react';
import styles from './Cart.module.css';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import Button from '../Button/Button';
import Link from 'next/link';

const Cart = () => {
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
        <button className={styles.closeButton} onClick={toggleCart}><IoIosCloseCircle /></button>
        <div className={styles.cartContent}>
          <h2>Seu Carrinho</h2>
          <Link href='Checkout' className={styles.linkStyle}>
            <Button>FINALIZAR</Button>
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Cart;