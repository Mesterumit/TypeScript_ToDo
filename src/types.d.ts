// i have only "theree properties in "TodoType" because of API
// and name of them should be same " such as id,task,isDone"

interface TodoType{
    // union
    id:string | number;
    task: string;
    isDone: boolean;
}

interface ITodoList{
    todos: TodoType[]
    toggleTodo: ToogleFn;
    getTodos:() => Promise<TodoType[]>;
    setTodos: (todos:TodoType[]) => void;
    deleteTodo: DeleteFn;
}
type ToogleFn =(item:TodoType)=> void;

type DeleteFn = (id: string | number) => void;

interface IListItem{
    item:TodoType;
    key: string | number;
    toggleTodo: ToogleFn;
    getTodos:() => Promise<TodoType[]>;
    setTodos: (todos:TodoType[]) => void;
    deleteTodo: DeleteFn;
}

 type AddFn =(text:string) => void