import { useState } from "react"

const ConditionalRender = () => {
    const [login] = useState(true)
    const [name, setName] = useState("")
    const [inputName, setInputName] = useState()

    const handleInputId = (e) => {
        setInputName(e.target.value);

    }

    const NameVerified = () => {
        setName(inputName)
        setInputName("")

    }


    return (
        <div>
            <h1>Isso será exibido?</h1>
            {login && <p>Se login for true, sim</p>}
            {!login && <p>Se login for false, mostre</p>}

            <div>
                <p>Adivinhe o nome</p>
                <input type="text" value={inputName} onChange={handleInputId} />
                <button onClick={NameVerified}>verificar</button>
                <div>{
                    name === "João" ?
                        (<div><p>Esse é o joão</p></div>)
                        :
                        (<div><p>Esse não é  joão</p></div>)
                }
                </div>
            </div>


        </div>
    )
}

export default ConditionalRender
