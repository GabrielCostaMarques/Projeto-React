import { useState } from "react";

export default function Conditional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    const sendEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)
        console.log("testando");
    }

    const CleanEmail=()=>{
        return( 
        setUserEmail(""),
        document.getElementById("inputEmail").value=""
        )
    }



    return (
        <div>
            <h1>Renderização condicionaL</h1>
            <h2>Cadastre seu email</h2>

            <form action="">
                <input id="inputEmail" type="e-mail" placeholder="Digite seu Email..." onChange={(e) => setEmail(e.target.value)} />
                <button onClick={sendEmail}>Enviar Email</button>
                {userEmail && ( //o && nessa situação verifica se o userEmail é verdadeiro
                    <div>
                        <p>O email do Usuário é: {userEmail}</p>
                        <button onClick={CleanEmail}>try again</button>
                    </div>
                    
                )}
            </form>
            {userEmail}
        </div>
    )
}