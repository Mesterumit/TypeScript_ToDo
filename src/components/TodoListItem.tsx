import React from 'react';



const TodoListItem: React.FC<IListItem> = ({ item, toggleTodo, getTodos, setTodos,deleteTodo }) => {

  const handleClick = async () => {
    console.log('clicked');
    await toggleTodo(item);
    const data: TodoType[] = await getTodos();
    setTodos(data);
  };

  const handleDelete=async()=>{
    console.log("delete clicked")
    await deleteTodo(item.id)
    const data:TodoType[] = await getTodos()
    setTodos(data)

  }

  return (
    <li>
      {item.isDone ? 
        <p className='checked' onClick={handleClick}>{item.task}</p> :
        <p onClick={handleClick}>{item.task}</p>
      } 
      <span className="task-icons" onClick={handleDelete}>✖️</span>
    </li>
  );
};


export default TodoListItem