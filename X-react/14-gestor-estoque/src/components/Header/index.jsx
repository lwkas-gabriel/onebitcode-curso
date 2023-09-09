import styles from "./styles.module.css"

export default function Header(){
    return (
        <header className={styles.header}>
            <span>REACT STOCK</span>
            <nav className={styles.navi}>
                <a href="#">Início</a>
                <a href="#">Items</a>
            </nav>
        </header>
    )
}