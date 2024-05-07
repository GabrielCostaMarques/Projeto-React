import { useState } from "react"


const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"])
    const [users, setUsers] = useState([
        { id: 1, name: "matheus", age: 31 },
        { id: 2, name: "gabriel", age: 27 },
        { id: 3, name: "maria", age: 20 }
    ])
//método para deletar usuários com input do ID

  // Define o estado inicial do inputId
  const [inputId, setInputId] = useState("");

  // Atualiza o estado inputId com o valor do campo de entrada
  const handleInputId = (e) => {
    setInputId(e.target.value);
  }

  // Filtra o array de usuários para remover o usuário com o ID correspondente
  const deleteUser = () => {
    setUsers(users.filter(user => user.id !== parseInt(inputId)));
    setInputId(""); // Limpa o campo de entrada após a exclusão
  }


  {/*Aqui está o que está acontecendo:

users.filter(...) - Isso chama o método filter no array users, criando um novo array com todos os elementos que atendem à condição especificada.

user => user.id !== parseInt(inputId) - Isso é uma função de filtro que é aplicada a cada elemento do array users.
 Para cada user no array, essa função verifica se o id do user é diferente do inputId convertido para um número inteiro (parseInt(inputId)).
  Se for verdadeiro, o user é mantido no novo array; caso contrário, ele é removido.
setUsers(...) - Por fim, o novo array, resultante da filtragem, é passado para setUsers, que atualiza o estado users com esse novo array, removendo assim o usuário com o id correspondente ao inputId digitado pelo usuário. */}




//fim do método

    return (
        <div>
            <ul>
                {/*metódo mpa com key "index" (do próprio metodo 'map') para aplicações pequenas*/}
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {/*metódo mpa com key (id) para aplicações com grande volume de dados onde usuários ou produtos tem seu ID */}
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <input type="text" value={inputId} onChange={handleInputId} />
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default ListRender
