const TemplateExpressions = () => {

    const name = "Gabriel";
    const data = {
      age:31,
      job: "Programmer"
    }
    

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h1>voce atua como {data.job}</h1>
            <h1>voce tem {data.age} anos</h1>
        </div>
    )
}
export default TemplateExpressions