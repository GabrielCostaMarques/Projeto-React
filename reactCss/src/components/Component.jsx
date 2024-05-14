import  "./MyComponent.css"
const Component = () => {
  return (
    <div>
      <p>Esse é o parágrafo do componente</p>
      <p className="my-paragraph-component">este tbm é do componente mas com classe para nao conflitar com o App.css</p>
    </div>
  )
}

export default Component
