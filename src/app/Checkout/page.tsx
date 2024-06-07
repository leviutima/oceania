'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../components/Header/Header";
import styles from "./Checkout.module.css";
import Button from "../components/Button/Button";
import { useCart } from "../components/Cart/CartContext"; // Importando o hook useCart
import { getEnderecoPorCep, createEndereco, Endereco } from '../../Services/EnderecoService'; // Importando o serviço

const Checkout: React.FC = () => {
    const { cart, total } = useCart(); // Obtendo os itens do carrinho e o total do contexto
    const [formValues, setFormValues] = useState({
        CEP: '',
        LOGRADOURO: '',
        NUMERO: '',
        BAIRRO: '',
        CIDADE: '',
        ESTADO: '',
        PAIS: '',
        INFO_ADICIONAIS: '',
        TIPO_END: '',
        FK_CLIENTE: '' // ou outro valor padrão apropriado
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value
        }));
    };

    const handleCepBlur = async () => {
        if (formValues.CEP) {
            try {
                const token = "seu-token-aqui"; // Obtenha o token de autenticação conforme necessário
                const enderecoData = await getEnderecoPorCep(parseInt(formValues.CEP), token);
                setFormValues((prevFormValues) => ({
                    ...prevFormValues,
                    LOGRADOURO: enderecoData.LOGRADOURO,
                    BAIRRO: enderecoData.BAIRRO,
                    CIDADE: enderecoData.CIDADE,
                    ESTADO: enderecoData.ESTADO,
                    PAIS: enderecoData.PAIS,
                    INFO_ADICIONAIS: enderecoData.INFO_ADICIONAIS || '',
                    FK_CLIENTE: enderecoData.FK_CLIENTE.toString()
                }));
            } catch (error) {
                console.error("Erro ao buscar dados do CEP:", error);
                // Adicione lógica de tratamento de erro conforme necessário
            }
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const token = 'seu-token-aqui'; // Obtenha o token de autenticação conforme necessário
    
            // Criar objeto somente com os dados do endereço
            const enderecoData: Endereco = {
                CEP: parseInt(formValues.CEP),
                LOGRADOURO: formValues.LOGRADOURO,
                NUMERO: parseInt(formValues.NUMERO),
                BAIRRO: formValues.BAIRRO,
                CIDADE: formValues.CIDADE,
                ESTADO: formValues.ESTADO,
                PAIS: formValues.PAIS,
                INFO_ADICIONAIS: formValues.INFO_ADICIONAIS || '',
                TIPO_END: formValues.TIPO_END || '',
                FK_CLIENTE: parseInt(formValues.FK_CLIENTE)
            };
    
            // Verifique o objeto antes de enviá-lo
            console.log("Enviando dados do endereço:", enderecoData);
    
            const createdEndereco = await createEndereco(enderecoData, token);
            console.log("Endereço criado com sucesso:", createdEndereco);
        } catch (error) {
            console.error("Erro ao criar endereço:", error);
        }
    };
    
    return (
        <>
            <section className={styles.checkoutSection}>
                <div className={styles.checkoutContainer}>
                    <div className={styles.mainContent}>
                        <h1>CHECKOUT</h1>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.paymentSection}>
                                <h2>Forma de Pagamento</h2>
                                <div className={styles.paymentOptions}>
                                    {/* Código para seleção da forma de pagamento */}
                                </div>
                                <div className={styles.paymentInputs}>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label htmlFor="cardName">Nome no cartão</label>
                                        <input type="text" id="cardName" name="cardName" required onChange={handleInputChange} />
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label htmlFor="cardNumber">Número do cartão</label>
                                        <input type="text" id="cardNumber" name="cardNumber" required pattern="\d{16}" title="Digite um número de cartão de crédito válido" onChange={handleInputChange} />
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label htmlFor="expiryDate">Data de validade</label>
                                        <input type="text" id="expiryDate" name="expiryDate" required pattern="\d{2}/\d{2}" title="Digite no formato MM/AA" placeholder="MM/AA" onChange={handleInputChange} />
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" required pattern="\d{3}" title="Digite um CVV válido" onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.addressSection}>
                                <h2>Endereço</h2>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cep">CEP</label>
                                    <input type="text" id="cep" name="CEP" required pattern="\d{5}-?\d{3}" title="Digite um CEP válido" onChange={handleInputChange} onBlur={handleCepBlur} value={formValues.CEP} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="logradouro">Logradouro</label>
                                    <input type="text" id="logradouro" name="LOGRADOURO" required onChange={handleInputChange} value={formValues.LOGRADOURO} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="numero">Número</label>
                                    <input type="text" id="numero" name="NUMERO" required onChange={handleInputChange} value={formValues.NUMERO} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="bairro">Bairro</label>
                                    <input type="text" id="bairro" name="BAIRRO" required onChange={handleInputChange} value={formValues.BAIRRO} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" id="cidade" name="CIDADE" required onChange={handleInputChange} value={formValues.CIDADE} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" id="estado" name="ESTADO" required onChange={handleInputChange} value={formValues.ESTADO} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="pais">País</label>
                                    <input type="text" id="pais" name="PAIS" required onChange={handleInputChange} value={formValues.PAIS} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="infoAdicionais">Informações Adicionais</label>
                                    <input type="text" id="infoAdicionais" name="INFO_ADICIONAIS" onChange={handleInputChange} value={formValues.INFO_ADICIONAIS || ''} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="tipoEnd">Seu apelido</label>
                                    <input type="text" id="tipoEnd" name="TIPO_END" onChange={handleInputChange} value={formValues.TIPO_END || ''} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="fkCliente">ID do Cliente</label>
                                    <input type="text" id="fkCliente" name="FK_CLIENTE" required onChange={handleInputChange} value={formValues.FK_CLIENTE} />
                                </div>
                            </div>
                            <Button type="submit">Finalizar</Button>
                        </form>
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
                            <span>Total:</span>
                            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
};

export default Checkout;
