'use client';
import { useState } from 'react';


import styles from './cadastro.module.css';


export default function CadastroPage() {
 // Estado do formulário
 const [livro, setLivro] = useState({
   titulo: '',
   autor: '',
   isbn: '',
   ano: '',
   resumo: ''
 });


 const handleChange = (e) => {
   const { name, value } = e.target;
   setLivro(prevState => ({
     ...prevState,
     [name]: value
   }));
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Enviando para API:', livro);
   alert('Livro cadastrado com sucesso!');
   setLivro({ titulo: '', autor: '', isbn: '', ano: '', resumo: '' });
 };


 return (
   <>
     <main className={styles.main}>
       <div className={styles.card}>
         <h2 className={styles.tituloPagina}>Cadastro de Livros</h2>
        
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
             Salvar
           </button>
         </form>
       </div>
     </main>
   </>
 );
}