import { useState } from "react"

import styles from "../style/MainBody.module.css";

export default function FormsEmail(){
    const[name, setName]=useState()
    //const[link, setLink]=useState("")

    const sendEmail=(e)=>{
        e.preventDefault()
        alert(name);
    }

    return(
        <section className={styles.BodyMain}>
            <form action="">
                <h1>Search Forms</h1>
                <div>
                    <input type="name" placeholder="Digite Seu nome" onChange={(e)=>{setName(e.target.value)}} />
                    <input type="url" placeholder="LinkedIn" />
                    <button onClick={sendEmail}>Enviar</button>
                </div>
            </form>
        </section>
    )
}