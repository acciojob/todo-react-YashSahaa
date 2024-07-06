
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const deleteTodo = (index)=>{
    const newTodo = todos.filter((todo,i)=>i!==index);
    setTodos(newTodo);
  }

  const addTodo = ()=>{
    setTodos([...todos,inputValue]);
    setInputValue('');
  }

  return (
    <div>
        <h1>To-Do List</h1>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul type="none">
          {
            todos.map((todo,index)=>{
              return(
                <li key={index}>
                {todo}
                <button onClick={()=>{deleteTodo(index)}}>Delete</button>
                </li>
              ) 
            })
          }
        </ul>
    </div>
  )
}

export default App
