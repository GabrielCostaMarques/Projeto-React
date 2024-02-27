export default function Form() {
    const cadastrarUser=(e)=>{

        //evento  para a página não fazer o reload quando mandar o forms
        e.preventDefault()
    }

    alert("Usuário cadastrado")
    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite seu Nome" />
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </>
    )
}