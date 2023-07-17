function TodoListItem({todo,Change,Delete}) {
    return(
        <>
        <div>
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(evt)=>{
                    Change({
                        ...todo,
                        isCompleted: evt.target.checked
                    })
                }}/>
                            {todo.text}
                <button onClick={()=>{Delete(todo)}}>delete</button>
            </label>
        </div>
        </>
    )
}

export default TodoListItem