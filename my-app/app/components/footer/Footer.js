import styles from './Footer.module.css';

export default function Footer(){
    const anoAtual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                &copy; {anoAtual} Instituto Federal da Paraíba (IFPB).
                Todos os direitos reservados. 
                <br/>Desenvolvido para fins didáticos por Lorena Maria.</p>
        </footer>
    )
}