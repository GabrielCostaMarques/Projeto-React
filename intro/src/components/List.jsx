import Item from './Item'


export default function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={2023}/>
                <Item marca='Fiat'ano_lancamento={1945}/>
                <Item />
            </ul>
        </>
    )
}