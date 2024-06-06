'use client'
import React, { useState } from "react";
import Header from "../components/Header/Header";
import styles from "./Checkout.module.css";
import Button from "../components/Button/Button";

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    return (
        <>
            <Header />
            <section className={styles.checkoutSection}>
                <div className={styles.checkoutContainer}>
                    <div className={styles.mainContent}>
                        <h1>CHECKOUT</h1>
                        
                        <div className={styles.paymentSection}>
                            <h2>Forma de Pagamento</h2>
                            <div className={styles.paymentOptions}>
                                <label className={`${styles.paymentOption} ${paymentMethod === 'creditCard' ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="creditCard"
                                        checked={paymentMethod === 'creditCard'}
                                        onChange={() => setPaymentMethod('creditCard')}
                                    />
                                    Cartão de Crédito
                                </label>
                                <label className={`${styles.paymentOption} ${paymentMethod === 'pix' ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="pix"
                                        checked={paymentMethod === 'pix'}
                                        onChange={() => setPaymentMethod('pix')}
                                    />
                                    Pix
                                </label>
                                <label className={`${styles.paymentOption} ${paymentMethod === 'boleto' ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="boleto"
                                        checked={paymentMethod === 'boleto'}
                                        onChange={() => setPaymentMethod('boleto')}
                                    />
                                    Boleto
                                </label>
                            </div>

                            {paymentMethod === 'creditCard' && (
                                <>
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
                                </>
                            )}

                            {paymentMethod === 'pix' && (
                                <div>
                                    <p>Para pagar com Pix, escaneie o QR code abaixo ou copie o código Pix para colar no seu aplicativo bancário.</p>
                                    <img src="https://via.placeholder.com/200" alt="QR Code Pix" />
                                    <p>Código Pix: Código exemplo</p>
                                </div>
                            )}

                            {paymentMethod === 'boleto' && (
                                <div>
                                    <p>Para pagar com boleto, clique no botão abaixo para gerar seu boleto bancário.</p>
                                    <Button>Gerar Boleto</Button>
                                </div>
                            )}
                        </div>

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
                            <div className={styles.summaryItem}>
                                <span>Produto 1</span>
                                <span>R$ 50,00</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Produto 2</span>
                                <span>R$ 30,00</span>
                            </div>
                        </div>
                        <div className={styles.summaryTotal}>
                            <span>Total</span>
                            <span>R$ 80,00</span>
                        </div>
                        <Button>Finalizar Compra</Button>
                    </aside>
                </div>
            </section>
        </>
    );
}

export default Checkout;
