import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/inputForm'
import TodoList from '../components/TodoList';
// useAxios returning an object
import useAxios from '../hooks/useAxios';

const Home = () => {
  // <TodoType[] ==> it is called as generic
  // in here the data we are getting for "TodoType"
  // only can be  "
  //  {
  //   useState<TodoType[]>([
  //     {
  //       id:1,
  //       task:"something",
  //       isDone: false
  //     }
  //   ])
  // }"
  // because in "types.d.ts" file i have a interface file which have these peroperties

const [todos, setTodos] = useState<TodoType[]>([])

// i can desctructure the object from hook
// useAxios is returning an object, so i should destructere it 
const {getTodos,addTodo,toggleTodo,deleteTodo} = useAxios()

useEffect(()=>{
  const fetchData = async()=>{
    const data:TodoType[] = await getTodos()
    setTodos(data)
  }
  fetchData()
  // console.log("Todos", todos)
},[])

// i am havig a "useEffect" because , "getTodos" is async function which takes time
//  so if i use "useEfect" i can update it right away when the "todos" is changed 
useEffect(()=>{
console.log(todos)
},[todos])


  return (
    <div className='main'>
      <InputForm addTodo={addTodo} setTodos={setTodos} getTodos={getTodos}  />
      <TodoList todos={todos} toggleTodo={toggleTodo} setTodos={setTodos} getTodos={getTodos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Home