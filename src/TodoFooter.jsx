function TodoFooter({todos,ClearCompleted}){

   const lengthTodo =  todos.filter((todo) => todo.isCompleted).length
return(
    <>
    <div>
        <span>{lengthTodo} / {todos.length}</span>
        <button onClick={ClearCompleted}>Delete All Completes</button>
    </div>
    </>
)
}
export default TodoFooter