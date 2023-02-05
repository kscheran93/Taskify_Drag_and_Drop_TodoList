export interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleChange:(e: React.FormEvent)=>void;
}

export interface Todo {
    id:number;
    todo:string,
    isDone:boolean
}

//SingleTodoComponent
export type SingleTodoProps ={
    index:number
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
//TodoComponent

export interface TodoProps {
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos:Todo[],
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>,    
}





