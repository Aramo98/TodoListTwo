import { useState } from "react"

function TodoHeader({AddingText}){

    const [value,setValue] = useState("")
return(
    <div>
        <form onSubmit={(evt)=>{
            evt.preventDefault()
            AddingText(value);
            setValue("")
            }}> 
            <input type="text" value={value}  onChange={(evt)=>setValue(evt.target.value)} placeholder="type here"/>
            <button>Add</button>
        </form>
    </div>
)
}

export default TodoHeader