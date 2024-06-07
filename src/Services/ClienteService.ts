export interface Cliente {
    nm_clie: string;
    cpf: string;
    email: string;
    senha: string;
    dt_nasc: string;
}

const API_URL = 'http://localhost:8080/clientes';

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
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
