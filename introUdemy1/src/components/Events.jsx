const Events = () => {

    const handleMyEvent = (e) => {
      console.log(e);
    }

    const renderSomeThing = (x) => {
      if(x){
        return(
            <h3>Renderizo isso</h3>
        )
      }else{
        return(<h3>Renderizo tambem</h3>)
      }
    }
    
    
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui</button>
            </div>
            <div>
                {renderSomeThing(true)}
                {renderSomeThing(false)}
            </div>
        </div>
    )
}
export default Events;