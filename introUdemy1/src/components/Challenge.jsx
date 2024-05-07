import { useState } from 'react'


const Challenge = () => {
    const [estado, setEstado] = useState(0)

    const soma = () => {
        setEstado(estado + 1)
    }

    return (
        <>
            <button onClick={soma}>Clique para somar os valores</button>
            <h3>contador: {estado}</h3>
        </>
    )
}
export default Challenge