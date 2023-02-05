import React, {useRef} from 'react'
import './styles.css'
import { Props } from '../models/model'

export const InputField:React.FC<Props> = ({todo, setTodo, handleChange}) => {
   const inputRef = useRef<HTMLInputElement>(null);

return (
    <form className='input' onSubmit={(e)=>{
    handleChange(e)
    inputRef.current?.blur()
    }}>
       <input ref= {inputRef} type="input" placeholder='Enter a Task'
       value={todo} 
       onChange={(e)=>setTodo(e.target.value)} 
          className='input__box' />
       <button className='input__submit'>Go</button>           
    </form>
  )
}
