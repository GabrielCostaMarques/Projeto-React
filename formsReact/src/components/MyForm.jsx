import { useState } from "react"
import "./MyForm.css"

const MyForm = ({ user }) => {

  // usando a condição ternária para verificar se há um usuário e assim preencher por default as informações dele no input
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [descricao, setDescricao] = useState(user ? user.descricao : "")
  const [role, setRole]=useState(user ? user.role : "")

  // usando function externa para guardar dados no state
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (event) => {
    // função para enviar o formulário sem carregar a página usando preventDefault
    event.preventDefault();
    alert(`Enviando formulário de ${name} e ${email}\n ${descricao}\n Cargo: ${role}`);
    setEmail("")
    setName("")
    setDescricao("")
  }

  return (
    // criação de form
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            onChange={handleName}
            value={name} />
        </div>
        {/* label envolvendo input otimizando código de formulário*/}
        <label>
          <span>E-mail</span>
          {/* usando função inline para guardar no state */}
          <input
            type="e-mail"
            name="e-mail"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </label>
        <label>
          <span>Considerações</span>
          <textarea 
          name="bio" 
          placeholder="Nos diga o que quer..." 
          onChange={(e)=>setDescricao(e.target.value)}
          value={descricao}
          
          ></textarea>
        </label>

        <label>
          <span>escolha sua profissao</span>
          <select onChange={(e)=>setRole(e.target.value)} value={role}>
            <option value="">Escolha</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
            <option value="invite">Convidado</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
