import "./Button.css"

const ButtonCard=(props)=>{
    return(
        <button className="buttonCard">
            {props.text}
        </button>
    )
}

export default ButtonCard