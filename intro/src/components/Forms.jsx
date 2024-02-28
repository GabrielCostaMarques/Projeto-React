
import { useState } from "react"



export default function Form() {
    const cadastrarUser = (e) => {

        //evento  para a página não fazer o reload quando mandar o forms
        alert("Usuário cadastrado")
        e.preventDefault()
        console.log(`The user: ${name} Sign ou your password ${password}`);
    }

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type it your name"
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Digite sua Senha" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </>
    )
}