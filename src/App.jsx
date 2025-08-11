import React, { useState } from 'react'
import './App.css'

import { MdDelete } from "react-icons/md";
import { LuFilePlus2 } from "react-icons/lu";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim() === "") return
    setTodos([...todos, input])
    setInput("")
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className='app'>
      <div className="main-div">
        <h1 className='title'>📝 Todo App</h1>
        <form onSubmit={addTodo}>
          <input 
            type="text"
            placeholder='Vazifa yozing...' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <LuFilePlus2 style={{fontSize: "1.2rem"}} />
          </button>
        </form>

        <ul className='lists'>
          {todos.map((todo, index) => (
            <div className='list' key={index}>
              <li>
                {todo}
                <button 
                  className='clear-btn' 
                  onClick={() => deleteTodo(index)}
                >
                  <MdDelete style={{fontSize: "1.5rem"}} />
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App