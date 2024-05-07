import { useState } from 'react'


const ManageData = () => {
    const [number, setNumber] = useState(0)

    const someData = () => {
        setNumber(number + 1)
    }

    return (
        <>
            <button onClick={someData}>Clique para somar os valores</button>
            <h3>contador: {number}</h3>
        </>
    )
}
export default ManageData