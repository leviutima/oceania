'use client';
import { useState } from 'react';
import styles from './Cart.module.css';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import Button from '../Button/Button';
import Link from 'next/link';
import { useCart } from '../Cart/CartContext'; 

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, total } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <button className={styles.cartButton} onClick={toggleCart} aria-label="Toggle cart">
        <FaCartShopping />
      </button>
      <aside className={`${styles.cartAside} ${isCartOpen ? styles.open : ''}`} aria-hidden={!isCartOpen}>
        <button className={styles.closeButton} onClick={toggleCart} aria-label="Close cart">
          <IoIosCloseCircle />
        </button>
        <div className={styles.cartContent}>
          <h2>Seu Carrinho</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.produto.id}>
                {item.produto.nm_prod} - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.produto.preco)} x {item.quantity}
              </li>
            ))}
          </ul>
          <div>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</div>
          <Link href="/Checkout" className={styles.linkStyle}>
            <Button>FINALIZAR</Button>
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Cart;
