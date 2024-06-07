'use client'
import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner/Banner";
import lixos from '../assets/lixos.jpg'
import style from '../Home/page.module.css'
import ProdutoCard from '../components/Card/Card'; 
import { Produto, getAllProdutos } from '../../Services/ProdutoService'; 

export default function Home() {
  const [produtosEmDestaque, setProdutosEmDestaque] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutosEmDestaque = async () => {
      try {
        const produtos = await getAllProdutos();
        setProdutosEmDestaque(produtos);
      } catch (error) {
        console.error('Erro ao buscar produtos em destaque:', error);
      }
    };

    fetchProdutosEmDestaque();
  }, []);

  return (
    <>
      <Banner titulo="BEM VINDO A OCÊANIA" img={lixos}>Somos a Oceânia, uma empresa determinada a diminuir a poluição dos oceânos. Aqui você encontrará produtos
        do dia dia com materiais reciláveis, ajudando assim o meio ambiente a ser um lugar menos poluído e mais prazeroso de se estar. Ajude a causa e venha fazer parte
        da comunidade Oceânia!
      </Banner>
      <section className={style.containerProd}>
        <h2>
          PRODUTOS EM DESTAQUE
        </h2>
        <div className={style.produtoSection}>
          {produtosEmDestaque.map(produto => (
            <ProdutoCard key={produto.id} produto={produto} /> 
          ))}
        </div>
      </section>
      <section>
      </section>
    </>
  );
}
