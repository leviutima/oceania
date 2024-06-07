export interface Lojista {
    NM_LOJISTA: string;
    CNPJ: string;
    EMAIL: string;
    SENHA: string;
}

const createLojista = async (lojista: Lojista): Promise<Lojista> => {
    try {
        const response = await fetch('http://localhost:8080/lojistas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(lojista)
        });

        if (!response.ok) {
            throw new Error(`Erro ao criar lojista: ${response.statusText}`);
        }

        const responseData: Lojista = await response.json();
        console.log('Lojista criado com sucesso:', responseData);
        return responseData;
    } catch (error: any) {
        console.error('Erro ao criar lojista:', error);
        throw new Error('Erro ao criar lojista: ' + error.message);
    }
};

export default createLojista;
