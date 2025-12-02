import Link from "next/link";
import styles from './Header.module.css';

export default function Header(){

    return(
        <header className={styles.header}>
            <h1>
                <Link href="/" className={styles.link}>
                IFPB-Biblioteca
                </Link>
            </h1>

                <nav>
                    <Link href="/" className={styles.link}>
                    Home
                    </Link>
                    <Link href="/cadastro" className={styles.link}>
                    Cadastro de Livros
                    </Link>
                    <Link href="/sobre" className={styles.link}>
                    Sobre
                    </Link>
                </nav>
        </header>


    );
}