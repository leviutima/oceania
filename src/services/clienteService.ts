export interface Cliente {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    dt_nascimento: string; 
}


const API_URL = 'http://localhost:8080/clientes';

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao criar cliente');
    }

    return response.json();
};
