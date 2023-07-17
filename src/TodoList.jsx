import TodoListItem from "./TodoListItem"

function TodoList({todos,Change,Delete}) {
    return(
        <div>
            {todos.map((todo)=>{
               return(
         <TodoListItem 
         key={todo.id}
          todo={todo}
          Change={Change}
          Delete={Delete}
          />
               )
            })}
        </div>
    )
}

export default TodoList