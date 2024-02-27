import photo from "/imgTeste.jpg"
import styles from './style/Pessoa.module.css'

export default function Pessoa({nome,idade,profissao}){
   
    return(
        <div className={styles.pessoaContainer}>
        <img src={photo} style={{width:"200px", height:"auto"}}/>

        <h2>Nome: {nome}</h2>
        <h2>Idade: {idade}</h2>
        <h2>Profissão: {profissao}</h2>
        </div>
    )
}