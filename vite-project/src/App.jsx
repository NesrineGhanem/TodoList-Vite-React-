import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [newitem ,setNewItem] = useState("")
  const [todos,setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos)=>{
      return [
        ...currentTodos,
      {id:crypto.randomUUID(), title: newitem , completed:false},
      ]
    })
    setNewItem('')
   }

   function toggleTodo (id,completed){
    setTodos(currentTodos=>{
      return(
      currentTodos.map(todos=>{
        if(todos.id === id){
          return{...todos,completed}
        }
        return todos
      })
      )
    })
   }
   function deleteTodo (id) {
    setTodos(currentTodos =>{
      return (
        currentTodos.filter(todos.id !== id)
      )
    })
   }
  return (
    <>
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='forme-row'>
        <label htmlFor='item'>New item</label>
        <input type="text" id="item" 
        value={newitem}
        onChange={e=>setNewItem(e.target.value)}
        />
      </div>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map(todos=>{
          return(
          <li key={todos.id}>
        <label>
          <input type='checkbox' checked={todos.completed}
          onChange={e=> toggleTodo(todos.id , e.target.checked)}/>
          {todos.title}
          </label>
          <button className='btn btn-danger'
           onClick={()=> deleteTodo(todos.id)}
          >
            Delete</button>
       </li>
       )
        })}
      
      </ul>

   
    
    </>
  )
}

export default App
