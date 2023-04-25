import ButtonCard from "../Button"
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import "./forms.css"

const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX Design',
    'Mobile'
]
const Formulario=()=>{
    return(
        <section className="forms">
            
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo"placeholder="Digite seu cargo"/>
                <TextField label="Imagem"placeholder="Digite o endereço da imagem"/>
                <DropdownList label="Time" itens={teams}/>
                <ButtonCard text="Criar card"/>
            </form>
        </section>
    )
}
export default Formulario