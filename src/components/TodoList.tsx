import React from 'react'
import TodoListItem from './TodoListItem'



const TodoList :React.FC<ITodoList>=({todos,toggleTodo,getTodos, setTodos,deleteTodo}) => {
  return (
    <>
    {
      todos.map((item)=> <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo} getTodos={getTodos} setTodos={setTodos} deleteTodo={deleteTodo}/>)
    }
    </>
  )
}

export default TodoList