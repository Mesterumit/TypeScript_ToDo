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
}

interface IListItem{
    item:TodoType;
    key: string | number
}

 type AddFn =(text:string) => void