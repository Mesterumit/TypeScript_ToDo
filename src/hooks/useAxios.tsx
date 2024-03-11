import React ,{ useState} from 'react';
import axios from 'axios';

// i am havin interface for axios hook to let the other componnet know what kid of promise it will return
interface AxiosHook{
    getTodos:()=> Promise<TodoType[]>;
}

const useAxios =():AxiosHook=>{
    const [todos, setTodos] = useState<TodoType[]>([])

    const getTodos =async ()=>{
        const {data} = await axios.get<TodoType[]>('https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos')
        console.log("DATa", data)
        // setTodos(data)
        return data
    }
    // this is returning "getTodos" object
    return {getTodos}
}
export default useAxios