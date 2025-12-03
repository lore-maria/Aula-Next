
'use client';


import { useState } from 'react';
import { cadastrarLivro } from '../../api/livro_api'; // <--- Importação do serviço
import styles from './cadastro.module.css';


export default function CadastroPage() {
 const [livro, setLivro] = useState({
   titulo: '',
   autor: '',
   isbn: '',
   ano: '',
   resumo: ''
 });


 // Novo estado para feedback visual
 const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });


 const handleChange = (e) => {
   const { name, value } = e.target;
   setLivro(prevState => ({
     ...prevState,
     [name]: value
   }));
 };


 // Função atualizada para enviar ao Backend
 const handleSubmit = async (e) => {
   e.preventDefault();
   setMensagem({ texto: 'Enviando...', tipo: 'info' });


   try {
     await cadastrarLivro(livro);
     setMensagem({ texto: 'Livro cadastrado com sucesso!', tipo: 'sucesso' });
     setLivro({ titulo: '', autor: '', isbn: '', ano: '', resumo: '' }); // Limpa form
   } catch (error) {
     console.error(error);
     setMensagem({ texto: 'Erro ao conectar com o servidor.', tipo: 'erro' });
   }
 };


 return (
   <>
     <main className={styles.main}>
       <div className={styles.card}>
         <h2 className={styles.tituloPagina}>Cadastro de Livros</h2>


         {/* Bloco de Mensagem de Feedback */}
         {mensagem.texto && (
           <p style={{
               padding: '10px',
               marginBottom: '10px',
               backgroundColor: mensagem.tipo === 'sucesso' ? '#d4edda' :
                                mensagem.tipo === 'erro' ? '#f8d7da' : '#e2e3e5',
               color: mensagem.tipo === 'sucesso' ? '#155724' :
                      mensagem.tipo === 'erro' ? '#721c24' : '#383d41',
               borderRadius: '4px'
           }}>
             {mensagem.texto}
           </p>
         )}
        
         <form onSubmit={handleSubmit} className={styles.form}>
          
           <div className={styles.inputGroup}>
             <label htmlFor="titulo" className={styles.label}>Título</label>
             <input
               type="text"
               id="titulo"
               name="titulo"
               value={livro.titulo}
               onChange={handleChange}
               className={styles.input}
               required
             />
           </div>


           <div className={styles.inputGroup}>
             <label htmlFor="autor" className={styles.label}>Autor</label>
             <input
               type="text"
               id="autor"
               name="autor"
               value={livro.autor}
               onChange={handleChange}
               className={styles.input}
               required
             />
           </div>


           <div className={styles.inputGroup}>
             <label htmlFor="isbn" className={styles.label}>ISBN</label>
             <input
               type="text"
               id="isbn"
               name="isbn"
               value={livro.isbn}
               onChange={handleChange}
               className={styles.input}
             />
           </div>


           <div className={styles.inputGroup}>
             <label htmlFor="ano" className={styles.label}>Ano</label>
             <input
               type="number"
               id="ano"
               name="ano"
               value={livro.ano}
               onChange={handleChange}
               className={styles.input}
             />
           </div>


           <button type="submit" className={styles.button}>
             {mensagem.texto === 'Enviando...' ? 'Salvando...' : 'Salvar'}
           </button>
         </form>
       </div>
     </main>
   </>
 );
}


