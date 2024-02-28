import styles from './style/Header.module.css'



export default function Header(){
    return(
        <header>

            <div className={styles.headerContent}>
                <nav>
                    <a href="#overview">Overview</a>
                    <a href="#experiencias">Experiências</a>
                    <a href="#teste">TESTE</a>
                    <a href="#TESTE1">TESTE1</a>  
                </nav>
            </div>

        </header>
    )
}