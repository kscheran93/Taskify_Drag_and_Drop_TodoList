import React from 'react'
import './styles.css'
import { TodoProps } from '../models/model'
import { SingleTodo } from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd'

export const TodoList:React.FC<TodoProps> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {

return (
    <div className='container'>
        <Droppable droppableId='todosList'>
       {
        (provided, snapshot)=>(
               <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`} ref={provided.innerRef}{...provided.droppableProps}>
                <span className='todos__heading'>Active Tasks</span>
           {
            todos.map((todo, index) =>(
                 <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))
        }
        {provided.placeholder}
    </div>
        )
       }
        </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided, snapshot)=>(
                       <div className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`} ref={provided.innerRef} {...provided.droppableProps}>
               <span className='todos__heading'>Completed Tasks</span>
           {
            completedTodos.map((todo, index) =>(
                 <SingleTodo index={index} todo={todo} key={todo.id} todos={completedTodos} setTodos={setCompletedTodos}/>
            ))
        }
        {provided.placeholder}
        </div>
                    )
                }
            </Droppable>
        
    </div>
   
  )
}
