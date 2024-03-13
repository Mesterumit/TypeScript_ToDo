import React,{useState} from 'react'

interface IInputForm{
  addTodo:AddFn
}

const InputForm:React.FC<IInputForm> = ({addTodo})=>{

  const [task,setTask] = useState("")

  const handleClick=(e: React.FormEvent)=>{
    e.preventDefault()
    addTodo(task)
    setTask('')
  }

  return (
    <form className="input-form" onSubmit={handleClick}>
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e)=> setTask(e.target.value)}
        
      />
      <button
        className="btn-hover btn-color"
        type="submit"
      >
        Add New Todo
      </button>
    </form>
  )

  }
export default InputForm