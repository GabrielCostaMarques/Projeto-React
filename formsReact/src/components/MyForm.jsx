import "./MyForm.css"

const MyForm = () => {
  return (
    // criação de form
    <div>
      <form>
        <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" placeholder="Digite seu Nome" />
        </div>
        {/* label envolvendo input otimizando código de formulário*/}
        <label>
            <span>E-mail</span>
            <input type="e-mail" name="e-mail"placeholder="Digite seu e-mail" />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
