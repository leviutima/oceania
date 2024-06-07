import React, { useState, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Produto } from '../../../Services/ProdutoService';
import { useCart } from '../Cart/CartContext';

interface ProdutoCardProps {
    produto: Produto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
    const { addToCart } = useCart();
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const handleAddToCart = useCallback(() => {
        if (!isAddingToCart) {
            setIsAddingToCart(true);
            addToCart(produto);

            // Usando um setTimeout para simular o bloqueio do botão por 1 segundo
            setTimeout(() => {
                setIsAddingToCart(false);
            }, 1000);
        }
    }, [isAddingToCart, addToCart, produto]);

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                alt={produto.nm_prod}
                height="140"
                image={produto.imagem || 'default-image-url.jpg'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {produto.nm_prod}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {produto.desc_prod}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Estoque: {produto.estoque}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Categoria: {produto.categoria}
                </Typography>
                <button onClick={handleAddToCart} disabled={isAddingToCart}>
                    {isAddingToCart ? 'Adicionando ao Carrinho...' : 'Adicionar ao Carrinho'}
                </button>
            </CardContent>
        </Card>
    );
};

export default ProdutoCard;
