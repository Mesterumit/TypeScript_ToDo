import React, { useState } from 'react';
import axios from 'axios';

// i am havin interface for axios hook to let the other componnet know what kid of promise it will return
interface AxiosHook {
    getTodos: () => Promise<TodoType[]>;
}

const useAxios = (): AxiosHook => {
    const [todos, setTodos] = useState<TodoType[]>([])

    const getTodos = async () => {
        const { data } = await axios.get<TodoType[]>('https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos')
        console.log("DATa", data)
        // setTodos(data)
        return data
    }

    // we have an function "AddFn" takes paramater but return nothing "void"
    // This indicates that the function contains asynchronous operations 
    // and will return a Promise. When you use async with a function, 
    // it automatically wraps the return value in a Promise.


//     In TypeScript, when you declare a function with an`async` keyword,
//     the function automatically returns a Promise.However,
//     it's important to note that the return type of an asynchronous function 
//     is determined by what it returns inside the function body.

// In your example, `addTodos` is an asynchronous function that
//  takes a `TodoType` parameter.Inside the function, you're making an 
//  asynchronous POST request using Axios, but you're not explicitly
//  returning anything from the function.

// The return type of an async function is always a Promise.
//  However, if you don't explicitly return a value from the function,
//  the Promise resolves to`undefined`.In your case, `addTodos` doesn't
//   have an explicit return statement, so it will implicitly return `undefined`.

//         Here's a breakdown:

//  - `addTodos` is declared as an asynchronous function, which means 
// it returns a Promise implicitly.
// - Inside the function, you're making an asynchronous POST request using Axios.
//   The `await` keyword ensures that the function waits for the POST request to complete.
//  - After the POST request, you're calling the `getTodos()` function
//   if `data` is truthy.

// Since there's no explicit return statement in the function, 
// it implicitly returns`undefined`, and the Promise resolves to`undefined` 
// when the asynchronous operations inside the function complete.

//     Therefore, callers of `addTodos` can expect to handle the result as
//         a `Promise<void>`, indicating that the function doesn't return a 
//      specific value but resolves with `undefined` when it completes
//     successfully.

    const addTodos:AddFn = async (task) => {
        const newTodo = {
            task: task,
            isDone: false,

        }
        const { data } = await axios.post<TodoType>('https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos', newTodo)
        if (data) {
            getTodos()
        }
    }
    // this is returning "getTodos" object
    return { getTodos }
}
export default useAxios