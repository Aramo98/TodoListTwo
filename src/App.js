import { useState } from 'react';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

function App() {

  const [todos,setTodos] = useState([])
  return (
    <div className="App">
     <TodoHeader AddingText={(text)=>{
      setTodos([
        ...todos,
        {
          
          id:Math.random(),
          text:text,
          isCompleted: false
        }
      ])
     }}/>
      <TodoList 
      todos ={todos}
       Delete={(todo)=>{
        setTodos(todos.filter((t)=>t.id !== todo.id))
       }}

       Change={(newTodo)=>{
      setTodos(todos.map((todo)=>{
        if (todo.id === newTodo.id) {
          return newTodo
        }
        return todo
      })) 
       }}
      />
      
     <TodoFooter todos={todos} ClearCompleted= {()=>{
   setTodos(todos.filter((todo)=>  !todo.isCompleted))   
     }}/>
    </div>
  );
}

export default App;
