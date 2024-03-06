
import Button from "./EventsComponents/Button";

export default function Event(){

    const myEvent=()=>{
        alert(`Event actived!`);
    }

    const secondEvent=()=>{
        return alert(`Event actived! 2`);
        
    }

    return(
<>
        <p>Clique para disparar um evento</p>
        <Button event={myEvent} text="Primeiro evento"/>
        <Button event={secondEvent} text="Segundo evento"/>
</>

    )
}