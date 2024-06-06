'use client';

import { useState, FormEvent } from 'react';
import Header from "../components/Header/Header";
import style from '../Cadastro/Cadastro.module.css';
import Button from "../components/Button/Button";
import Image from "next/image";
import logo from '../../../public/C-Baleia.png';
import { createCliente, Cliente } from '../../services/clienteService';

const Cadastro = () => {
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [dt_nascimento, setDt_nascimento] = useState<string>(''); // Ajustado para dt_nascimento
    const [erro, setErro] = useState<string>('');
    const [sucesso, setSucesso] = useState<string>('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const cliente: Cliente = { nome, cpf, email, senha, dt_nascimento }; // Ajustado para dt_nascimento

        try {
            const clienteCriado = await createCliente(cliente);
            console.log('Cliente criado com sucesso:', clienteCriado);
            setSucesso('Cliente criado com sucesso!');
            setErro('');
        } catch (error) {
            if (error instanceof Error) {
                console.error('Falha ao criar cliente:', error.message);
                setErro('Falha ao criar cliente: ' + error.message);
            } else {
                console.error('Falha ao criar cliente:', error);
                setErro('Falha ao criar cliente: Erro desconhecido');
            }
            setSucesso('');
        }
    };

    return (
        <>
            <Header />
            <section className={style.containerSection}>
                <div className={style.cardCadastro}>
                    <div className={style.blueSection}>
                        <div className={style.containerTitle}>
                            <h2>SEJA BEM-VINDO!</h2>
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
                                    placeholder="Digite seu CPF..." 
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
                                    value={dt_nascimento} // Ajustado para dt_nascimento
                                    onChange={(e) => setDt_nascimento(e.target.value)}
                                />
                            </div>
                            <Button type="submit">CRIAR</Button>
                        </form>
                        {erro && <p className={style.errorMessage}>{erro}</p>}
                        {sucesso && <p className={style.successMessage}>{sucesso}</p>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cadastro;
