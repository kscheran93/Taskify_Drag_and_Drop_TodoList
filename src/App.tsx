import { useState} from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { Todo } from './models/model';
import { TodoList } from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App:React.FC=()=> {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

const handleChange =(e: React.FormEvent)=> {
  e.preventDefault()
  if(todo) {
    setTodos([...todos, {id:Date.now(), todo, isDone:false}])
    setTodo('')
  }
}

const onDragEnd = (result:DropResult)=>{
    const {source, destination} = result;
    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index===source.index) return;

    let add;
    let active = todos;
    let complete = completedTodos;
    
    //source Logic
    if(source.droppableId==='todosList') {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    //destination Logic
    if(destination.droppableId==='todosList') {
      active.splice(destination.index,0,add)
    } else {
      complete.splice(destination.index,0,add)
    }
    setCompletedTodos(complete)
    setTodos(active)
}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField todo ={todo} setTodo={setTodo} handleChange={(e)=>handleChange(e)}/>
     <TodoList todos ={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    </div>
    </DragDropContext>
  );
}

export default App;
