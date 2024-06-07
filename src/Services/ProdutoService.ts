import axios from 'axios';

const API_URL = "http://localhost:8080/produtos"; 

export interface Produto {
    id: string; 
    nm_prod: string;
    imagem: string;
    desc_prod: string;
    preco: number;
    estoque: number;
    categoria: string;
}

export const getProdutoById = async (id: number): Promise<Produto> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export const createProduto = async (produto: Produto): Promise<Produto> => {
    const response = await axios.post(API_URL, produto);
    return response.data;
}

export const getAllProdutos = async (): Promise<Produto[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const updateProduto = async (id: number, produto: Produto): Promise<Produto> => {
    const response = await axios.put(`${API_URL}/${id}`, produto);
    return response.data;
}

export const deleteProduto = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}
