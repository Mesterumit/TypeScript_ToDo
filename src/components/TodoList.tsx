import React from 'react'
import TodoListItem from './TodoListItem'



const TodoList :React.FC<ITodoList>=({todos}) => {
  return (
    <>
    {
      todos.map((item)=> <TodoListItem key={item.id} item={item} />)
    }
    </>
  )
}

export default TodoList