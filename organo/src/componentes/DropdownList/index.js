import "./DropdownList.css"
const DropdownList =(props)=>{
    
/*o .map mapeia a lista de string, e no parâmetro transforma esse item em uma <option></option> e 
ele precisa da key, e no caso ele passa o próprio item como chave*/
    return(
        <div className="dropdownlist">
            <label>{props.label}</label>

            <select>    
                {props.itens.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default DropdownList