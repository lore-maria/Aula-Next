export const cadastrarLivro = async (livro) => {
    // URL do seu Controller no Spring Boot (ajuste o endpoint '/livros' conforme seu backend)
    const endpoint = 'http://localhost:8080/livros';
 
 
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Se tiver autenticação no futuro, o token iria aqui
            },
            body: JSON.stringify(livro)
        });
 
 
        if (!response.ok) {
            // Se o backend retornar erro (400, 500), lançamos uma exceção
            const erroData = await response.text(); // ou response.json() dependendo do backend
            throw new Error(`Erro ao cadastrar: ${erroData || response.statusText}`);
        }
 
 
        // Se quiser retornar o livro salvo com o ID gerado:
        return await response.json();
       
    } catch (error) {
        // Repassamos o erro para quem chamou a função tratar
        console.error("Erro na comunicação com a API:", error);
        throw error;
    }
 };
 
 