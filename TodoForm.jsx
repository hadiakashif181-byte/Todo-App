import { useState } from "react";
export const TodoForm = ({onAddTodo})=>{
        const[inputValue, setInputValue] = useState("");        
     const HandleChange =(value)=>{
    setInputValue(value);
    }
    const HandleAddTask= (event)=>{
                event.preventDefault();
        onAddTodo(inputValue);
            setInputValue("");
    }
    return(
        <section>
    <form onSubmit={HandleAddTask}>
    <div>
    <input type="text" value={inputValue} onChange = {(event)=> HandleChange(event.target.value)}autoComplete="off"></input>
    </div>
    <div>
    <button className="submit" type="submit" >Add Task</button>
    </div>
    </form>
    </section>
    )
}