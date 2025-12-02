import styles from './sobre.module.css';


export default function SobrePage() {
 return (
   <>     
     <main className={styles.main}>
       <article className={styles.container}>
         <h1 className={styles.titulo}>Nossa História</h1>
        
         <h2 className={styles.subtitulo}>A Biblioteca do Campus Monteiro</h2>
         <p className={styles.texto}>
           A Biblioteca do Instituto Federal da Paraíba (IFPB) - Campus Monteiro é um órgão suplementar
           responsável por prover infraestrutura informacional para o suporte ao ensino, à pesquisa e à extensão.
           Localizada no coração do Cariri paraibano, nossa unidade busca democratizar o acesso ao conhecimento
           e incentivar o hábito da leitura em toda a comunidade acadêmica.
         </p>


         <p className={styles.texto}>
           Nosso acervo conta com milhares de exemplares, incluindo livros didáticos, literatura técnica especializada,
           periódicos e bases de dados digitais, atendendo aos cursos técnicos e superiores oferecidos pela instituição.
         </p>


         <h2 className={styles.subtitulo}>O Instituto Federal (IFPB)</h2>
         <p className={styles.texto}>
           A trajetória do IFPB remonta a 1909, com a criação da Escola de Aprendizes Artífices da Paraíba.
           Ao longo de mais de um século, a instituição evoluiu passando pelas denominações de Escola Técnica Federal
           e CEFET, até se consolidar como Instituto Federal em 2008.
         </p>
        
         <p className={styles.texto}>
           O Campus Monteiro representa a expansão dessa educação de excelência para o interior,
           transformando a realidade social e econômica da região através da formação qualificada de jovens e adultos.
         </p>


         <h2 className={styles.subtitulo}>Estrutura e Serviços</h2>
         <ul className={styles.lista}>
           <li className={styles.itemLista}>
             Empréstimo domiciliar e consulta local ao acervo físico.
           </li>
           <li className={styles.itemLista}>
             Acesso a computadores com internet para pesquisas acadêmicas.
           </li>
           <li className={styles.itemLista}>
             Salas de estudo em grupo e cabines individuais.
           </li>
           <li className={styles.itemLista}>
             Orientação para normalização de trabalhos acadêmicos (ABNT).
           </li>
         </ul>
       </article>
     </main>
   </>
 );
}
