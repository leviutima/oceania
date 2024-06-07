export interface Endereco {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    info_adicionais?: string;
    tipoEnd?: string;
}

export interface CepApiResponse {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    info_adicionais?: string;
}

const API_URL = 'http://localhost:8080/enderecos';

export const getEnderecoPorCep = async (cep: string, token: string): Promise<Endereco> => {
    try {
        const response = await fetch(`${API_URL}/cep/${cep}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({}),
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar endereço pelo CEP. Por favor, tente novamente mais tarde.');
        }

        return await response.json();
    } catch (error) {
        throw new Error('Erro ao conectar-se ao servidor. Por favor, verifique sua conexão de internet e tente novamente.');
    }
};

export const createEndereco = async (endereco: Endereco, token: string): Promise<Endereco> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(endereco),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar endereço. Por favor, tente novamente mais tarde.');
        }

        return await response.json();
    } catch (error) {
        throw new Error('Erro ao conectar-se ao servidor. Por favor, verifique sua conexão de internet e tente novamente.');
    }
};
