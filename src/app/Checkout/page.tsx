'use client';

import React from "react";
import Header from "../components/Header/Header";
import styles from "./Checkout.module.css";
import Button from "../components/Button/Button";
import { useCart } from "../components/Cart/CartContext"; // Importando o hook useCart

const Checkout = () => {
    const { cart, total } = useCart(); // Obtendo os itens do carrinho e o total do contexto

    return (
        <>
            <Header /> {/* Supondo que você tenha um componente Header para a navegação */}
            <section className={styles.checkoutSection}>
                <div className={styles.checkoutContainer}>
                    <div className={styles.mainContent}>
                        <h1>CHECKOUT</h1>
                        
                        <div className={styles.paymentSection}>
                            <h2>Forma de Pagamento</h2>
                            <div className={styles.paymentOptions}>
                                {/* Código para seleção da forma de pagamento */}
                            </div>

                            {/* Inputs para informações de pagamento */}
                            <div className={styles.paymentInputs}>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="cardName">Nome no cartão</label>
                                    <input type="text" id="cardName" name="cardName" required />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="cardNumber">Número do cartão</label>
                                    <input type="text" id="cardNumber" name="cardNumber" required pattern="\d{16}" title="Digite um número de cartão de crédito válido" />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="expiryDate">Data de validade</label>
                                    <input type="text" id="expiryDate" name="expiryDate" required pattern="\d{2}/\d{2}" title="Digite no formato MM/AA" placeholder="MM/AA" />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" required pattern="\d{3}" title="Digite um CVV válido" />
                                </div>
                            </div>
                        </div>

                        {/* Inputs para informações de endereço */}
                        <div className={styles.addressSection}>
                            <h2>Endereço</h2>
                            <div className={styles.formGroup}>
                                <label htmlFor="cep">CEP</label>
                                <input type="text" id="cep" name="cep" required pattern="\d{5}-?\d{3}" title="Digite um CEP válido" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="logradouro">Logradouro</label>
                                <input type="text" id="logradouro" name="logradouro" required/>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="numero">Número</label>
                                <input type="number" id="numero" name="numero" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" id="bairro" name="bairro" required  />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="estado">Estado</label>
                                <input type="text" id="estado" name="estado" required  />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="pais">País</label>
                                <input type="text" id="pais" name="pais" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="infoAdicionais">Informações Adicionais</label>
                                <input type="text" id="infoAdicionais" name="infoAdicionais" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="tipoEnd">Tipo de Endereço</label>
                                <input type="text" id="tipoEnd" name="tipoEnd" />
                            </div>
                        </div>
                    </div>

                    <aside className={styles.summarySection}>
                        <h2>Resumo</h2>
                        <div>
                            {cart.map((item) => (
                                <div key={item.produto.id} className={styles.summaryItem}>
                                    <span>{item.produto.nm_prod} x {item.quantity}</span>
                                    <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.produto.preco * item.quantity)}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.summaryTotal}>
                            <span>Total</span>
                            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
                        </div>
                        <Button>Finalizar Compra</Button>
                    </aside>
                </div>
            </section>
        </>
    );
}

export default Checkout;
