'use client'
import React, { useEffect, useState } from 'react';
import ProdutoCard from '../components/Card/Card';
import { Produto, getAllProdutos } from '../../Services/ProdutoService';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import style from '../Produtos/Produtos.module.css';

const ProdutoPage: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('ProdutoPage montado'); 
        let isMounted = true; 

        const fetchProdutos = async () => {
            try {
                const data = await getAllProdutos();
                if (isMounted) {
                    console.log("Produtos recuperados:", data);
                    setProdutos(data);
                }
            } catch (error: any) {
                if (isMounted) {
                    console.error("Erro ao recuperar produtos:", error);
                    setError(error.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProdutos();

        return () => {
            isMounted = false; 
        };
    }, []); 

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <>
            <div className={style.containerAll}>
                <h1>Lista de Produtos</h1>
                <div className={style.containerProd}>
                    {produtos.map((produto) => (
                        <Grid item key={produto.id} xs={12} sm={6} md={4} className={style.produtoItem}>
                            <ProdutoCard produto={produto} />
                        </Grid>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProdutoPage;
