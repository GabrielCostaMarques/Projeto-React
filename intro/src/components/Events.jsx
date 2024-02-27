export default function Event({numero}){

    const myEvent=()=>{
        alert(`Event actived! ${numero}`);
    }

    return(
<>
        <p>Clique para disparar um evento</p>
        <button onClick={myEvent}>Ativar!</button>
</>

    )
}