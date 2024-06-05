// services/clienteService.ts
export interface Cliente {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    dataNascimento: string;
}

const API_URL = 'http://localhost:8080/api/clientes'; // Atualize esta URL conforme necessário

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
        throw new Error(errorData.message || 'Failed to create cliente');
    }

    return response.json();
};
