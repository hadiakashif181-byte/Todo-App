import {  useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
export const Todo =()=>{
    const[_inputValue, _setInputValue] = useState("");//React Direct mutuation detect nhi krskta isliye Setter function is always improtant taake rerender ho.
const [task, setTask] = useState(getLocalStorageData());
    const HandleClear = ()=>{
       setTask([]);
    }
    const getLocalStorageData = () => {
  const data = localStorage.getItem("tasks");
  if(!data) return [];
  return JSON.parse(data);
};

    const HandleDelete = (content) => {
   const updatedTask = task.filter((curTask) => curTask.content !== content);
   setTask(updatedTask);
    //filter() naya array banata hai.Aur us array me sirf woh elements rakhta hai jinke liye condition true hoti hai.
    //filter us array me sirf wo tasks rakhta hai jo clicked value ke equal nahi hote.Isliye filter() new array banata hai jisme clicked task nahi hota.f
    //curTask → list ka current item
//value → clicked item
//!== → same na ho
//same wala remove ho jata hai
}

    const HandleAddTask =(value)=>{
                   if(!value) return;
        // to checl if the input field is empty or not

 const newTask = {
    id: Date.now(),
    content: value,
    checked: false
  };
        // to check if the content is already present or not
     //if(task.includes(inputValue)) return; - ye array method tha but now we have changed it to object so we have to implement object method .
     const ifTodoContentMatched = task.find((curTask)=>
        curTask.content === value
     );//find() returns the first task that matches the content, preventing duplicates.
//find() stops after the first match, which is why it’s efficient here.
     if(ifTodoContentMatched) return;
    setTask((prev)=>[  ...prev, newTask]);
    //Spread operator se previous tasks copy hote hain aur new task add hota hai.
//Aur prev => syntax React me latest state ensure karta hai kyunki state updates asynchronous ho sakti hain.

// Add to Local Storage.
localStorage.setItem("reactTodo", JSON.stringify(task))
}
const handleCheck = (content)=>{
  const checkedTask = task.map((curTask)=>{
    if(curTask.content === content
    ){console.log(curTask.content);
        console.log(content);
        return{... curTask, checked: !curTask.checked}; 
  }
else{
    return curTask;
}
});
setTask(checkedTask)
}  
    return( 
    <>
    <h1>Todo App</h1>
    <TodoDate />
    <TodoForm onAddTodo = {HandleAddTask}/>
    <section>
    <ul>
    {task.map((curTask) => {
        return <TodoList key = {curTask.id} data = {curTask.content} checked = {curTask.checked} DeleteFunc = {HandleDelete} CheckedFunc={handleCheck}/>
        
    })}
    </ul>

       <div className="container"><button className="clearAll" onClick={HandleClear}>Clear All</button></div>
    </section>

    </>

    )

}
// FINAL FLOW:
      {/*
User input likhta hai
        ↓
TodoForm submit
        ↓
HandleForm run
        ↓
newTask object banta hai
        ↓
SetTask state update
        ↓
task array update
        ↓
map() run
        ↓
TodoList render */} 
