import { useReducer, useState } from 'react'

const HookReducerAdvanced = () => {

    const initialTask = [
        { id: 1, text: "Fazer algo" },
        { id: 2, text: "Fazer outra coisa" },
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD": 
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };
                setTaskText("")
                return [...state, newTask]
            

            case "DELETE": 
            return state.filter((task)=>task.id !==action.id)
                default: 
                return state
                
                
                
            }
        }
    


    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchTasks({ type: "ADD" })
    }

    const removeTask=(id)=>{
        dispatchTasks({type:"DELETE", id})
    }
    return (
        <div>
            <p>Usando o Reducer</p>
            <br></br>
            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
            </form>


            {tasks.map((task) => (

                <p key={task.id} onDoubleClick={()=>removeTask(task.id)}>{task.text}</p>

            ))}
        </div>
    )
}

export default HookReducerAdvanced
