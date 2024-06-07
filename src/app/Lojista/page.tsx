'use client'
import React, { useState } from 'react';
import style from './Lojista.module.css';
import Button from '../components/Button/Button';
import createLojista, { Lojista as LojistaType } from '../../Services/LojistaService';

const Lojista: React.FC = () => {
    const [NM_LOJISTA, setNome] = useState<string>('');
    const [cnpj, setCnpj] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const lojista: LojistaType = {
            NM_LOJISTA,
            CNPJ: cnpj,
            EMAIL: email,
            SENHA: senha
        };

        try {
            const result = await createLojista(lojista);
            console.log('Lojista criado com sucesso:', result);
            // Limpar os campos do formulário
            setNome('');
            setCnpj('');
            setEmail('');
            setSenha('');
            setSuccess(true);
        } catch (error: any) {
            console.error('Erro ao criar lojista:', error);
            setError(error.message || 'Erro desconhecido ao criar o lojista.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={style.containerSection}>
            <div className={style.cardLojista}>
                <div className={style.container}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.subContainer}>
                            <div>
                                <label className={style.containerInput}>
                                    NOME
                                    <input
                                        type="text"
                                        placeholder="Digite seu nome..."
                                        className={style.inputStyle}
                                        value={NM_LOJISTA}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className={style.containerInput}>
                                    CNPJ
                                    <input
                                        type="text"
                                        placeholder="Digite seu CNPJ..."
                                        className={style.inputStyle}
                                        value={cnpj}
                                        onChange={(e) => setCnpj(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className={style.containerInput}>
                                <label className={style.containerInput}>
                                    EMAIL
                                    <input
                                        type="email"
                                        placeholder="Digite seu email..."
                                        className={style.inputStyle}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className={style.containerInput}>
                                    SENHA
                                    <input
                                        type="password"
                                        placeholder="Digite sua senha..."
                                        className={style.inputStyle}
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Carregando...' : 'CRIAR'}
                        </Button>
                        {error && <p className={style.errorMessage}>{error}</p>}
                        {success && <p className={style.successMessage}>Lojista criado com sucesso!</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Lojista;
