// src/pages/Cadastro/Cadastro.tsx
'use client'
import { useState, FormEvent } from 'react';
import Header from "../components/Header/Header";
import style from '../Cadastro/Cadastro.module.css';
import Button from "../components/Button/Button";
import Image from "next/image";
import logo from '../../../public/C-Baleia.png';

interface Cliente {
    nm_clie: string;
    cpf: string;
    email: string;
    senha: string;
    dt_nasc: string;
}

const Cadastro = () => {
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const createCliente = async (cliente: Cliente): Promise<Cliente> => {
        const API_URL = 'http://localhost:8080/clientes';
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar cliente. Por favor, tente novamente mais tarde.');
            }

            return await response.json();
        } catch (error) {
            throw new Error('Erro ao conectar-se ao servidor. Por favor, verifique sua conexão de internet e tente novamente.');
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!nome || !cpf || !email || !senha || !dataNascimento) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        const cliente: Cliente = { nm_clie: nome, cpf, email, senha, dt_nasc: dataNascimento };

        console.log('Dados do cliente a serem enviados:', cliente);

        try {
            setIsLoading(true);
            const createdCliente = await createCliente(cliente);
            console.log('Cliente criado com sucesso:', createdCliente);
            setSuccess('Cliente criado com sucesso!');
            setError('');
            setNome('');
            setCpf('');
            setEmail('');
            setSenha('');
            setDataNascimento('');
        } catch (error: any) {
            console.error('Erro ao criar cliente:', error.message);
            setError('Erro ao criar cliente: ' + error.message);
            setSuccess('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />
            <section className={style.containerSection}>
                <div className={style.cardCadastro}>
                    <div className={style.blueSection}>
                        <div className={style.containerTitle}>
                            <h2>SEJA BEM VINDO!</h2>
                            <Image src={logo} width={150} alt="Logo da oceânica" priority={true} />
                        </div>
                    </div>
                    <div className={style.form}>
                        <h2 className={style.titleForm}>CRIAR CONTA</h2>
                        <form className={style.containerForm} onSubmit={handleSubmit}>
                            <div className={style.inputContainer}>
                                <label>NOME:</label>
                                <input 
                                    className={style.inputCadastro} 
                                    type="text" 
                                    placeholder="Digite seu nome..." 
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label>CPF:</label>
                                <input 
                                    className={style.inputCadastro} 
                                    type="text" 
                                    placeholder="Digite seu cpf..." 
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label>EMAIL:</label>
                                <input 
                                    className={style.inputCadastro} 
                                    type="email" 
                                    placeholder="Digite seu email..." 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label>SENHA:</label>
                                <input 
                                    className={style.inputCadastro} 
                                    type="password" 
                                    placeholder="Digite sua senha..." 
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label>DATA DE NASCIMENTO:</label>
                                <input 
                                    className={style.inputCadastro} 
                                    type="date" 
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                />
                            </div>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? 'Criando...' : 'CRIAR'}
                            </Button>
                        </form>
                        {error && <p className={style.errorMessage}>{error}</p>}
                        {success && <p className={style.successMessage}>{success}</p>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cadastro;
