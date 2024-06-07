const API_URL = 'http://localhost:8080/enderecos';

export interface Endereco {
    CEP: number;
    LOGRADOURO: string;
    NUMERO: number;
    BAIRRO: string;
    CIDADE: string;
    ESTADO: string;
    PAIS: string;
    INFO_ADICIONAIS?: string;
    TIPO_END?: string;
    FK_CLIENTE: number;
}

export const getEnderecoPorCep = async (cep: number, token: string): Promise<Endereco> => {
    try {
        const response = await fetch(`${API_URL}/cep/${cep}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar endereço pelo CEP. Por favor, tente novamente mais tarde.');
        }

        const data = await response.json();

        const endereco: Endereco = {
            CEP: data.cep,
            LOGRADOURO: data.logradouro,
            NUMERO: data.numero,
            BAIRRO: data.bairro,
            CIDADE: data.cidade,
            ESTADO: data.estado,
            PAIS: data.pais,
            INFO_ADICIONAIS: data.info_adicionais,
            TIPO_END: data.tipo_end,
            FK_CLIENTE: data.fk_cliente
        };

        return endereco;
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
            body: JSON.stringify({
                cep: endereco.CEP,
                logradouro: endereco.LOGRADOURO,
                numero: endereco.NUMERO,
                bairro: endereco.BAIRRO,
                cidade: endereco.CIDADE,
                estado: endereco.ESTADO,
                pais: endereco.PAIS,
                info_adicionais: endereco.INFO_ADICIONAIS,
                tipo_end: endereco.TIPO_END,
                fk_cliente: endereco.FK_CLIENTE
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar endereço. Por favor, tente novamente mais tarde.');
        }

        const data = await response.json();

        const createdEndereco: Endereco = {
            CEP: data.cep,
            LOGRADOURO: data.logradouro,
            NUMERO: data.numero,
            BAIRRO: data.bairro,
            CIDADE: data.cidade,
            ESTADO: data.estado,
            PAIS: data.pais,
            INFO_ADICIONAIS: data.info_adicionais,
            TIPO_END: data.tipo_end,
            FK_CLIENTE: data.fk_cliente
        };

        return createdEndereco;
    } catch (error) {
        throw new Error('Erro ao conectar-se ao servidor. Por favor, verifique sua conexão de internet e tente novamente.');
    }
};
