import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Produto } from '../../../Services/ProdutoService';

interface ProdutoCardProps {
    produto: Produto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                alt={produto.nm_prod}
                height="140"
                image={produto.imagem}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {produto.nm_prod}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {produto.desc_prod}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Preço: {produto.preco}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Estoque: {produto.estoque}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Categoria: {produto.categoria}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProdutoCard;
