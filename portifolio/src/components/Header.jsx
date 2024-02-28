import styles from './style/Header.module.css'



export default function Header(){
    return(
        <header>

            <div className={styles.headerContent}>
                <ul>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#experiencias">Experiências</a></li>
                    <li><a href="#teste">TESTE</a></li>
                    <li><a href="#TESTE1">TESTE1</a></li>
                    
                </ul>
            </div>

        </header>
    )
}